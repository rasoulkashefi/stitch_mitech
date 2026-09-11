import { headers } from 'next/headers';

interface RateLimitRecord {
  timestamps: number[];
}

// In-memory sliding window store (keyed by IP)
const ipRateLimitStore = new Map<string, RateLimitRecord>();

// Clean up stale entries every 10 minutes to maintain low memory usage
const CLEANUP_INTERVAL = 10 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleEntries(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;

  const threshold = now - windowMs;
  for (const [ip, record] of ipRateLimitStore.entries()) {
    const validTimestamps = record.timestamps.filter((ts) => ts > threshold);
    if (validTimestamps.length === 0) {
      ipRateLimitStore.delete(ip);
    } else {
      record.timestamps = validTimestamps;
    }
  }
}

/**
 * Extracts client IP safely from Next.js request headers.
 */
export async function getClientIp(): Promise<string> {
  try {
    const headerList = await headers();
    const cfIp = headerList.get('cf-connecting-ip');
    if (cfIp) return cfIp.trim();

    const xForwarded = headerList.get('x-forwarded-for');
    if (xForwarded) {
      // First IP in list is original client
      return xForwarded.split(',')[0].trim();
    }

    const xReal = headerList.get('x-real-ip');
    if (xReal) return xReal.trim();
  } catch {
    // Fallback if headers() is invoked outside request context
  }

  return '127.0.0.1';
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetSeconds: number;
}

/**
 * Sliding window IP rate limiter.
 * Default: Maximum 5 submissions per 15 minutes per IP.
 */
export function checkRateLimit(
  ip: string,
  limit = 5,
  windowMs = 15 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  const threshold = now - windowMs;

  cleanupStaleEntries(windowMs);

  let record = ipRateLimitStore.get(ip);
  if (!record) {
    record = { timestamps: [] };
    ipRateLimitStore.set(ip, record);
  }

  // Filter timestamps within active window
  record.timestamps = record.timestamps.filter((ts) => ts > threshold);

  if (record.timestamps.length >= limit) {
    const oldest = record.timestamps[0];
    const resetSeconds = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    return {
      allowed: false,
      remaining: 0,
      resetSeconds,
    };
  }

  // Record this attempt
  record.timestamps.push(now);

  return {
    allowed: true,
    remaining: limit - record.timestamps.length,
    resetSeconds: Math.ceil(windowMs / 1000),
  };
}

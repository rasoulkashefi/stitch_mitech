'use client';

import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Plane,
  HeartPulse,
  Landmark,
  Workflow,
  Radio,
  ShieldCheck,
  Zap,
  Activity,
  Users,
  Radar,
  Boxes,
  DollarSign,
  RefreshCw,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { SolutionSlug } from './solutions-data';

interface SolutionDiagramProps {
  type: SolutionSlug | 'hub';
  systemCode?: string;
}

export default function SolutionDiagram({
  type,
  systemCode = 'MITECH-AMAAS-v3.2',
}: SolutionDiagramProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Auto-cycle through visual diagnostic modes every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[540px] mx-auto overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl shadow-slate-950/40" dir="ltr">
      
      {/* Background Engineering Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52, 211, 153, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 211, 153, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Gradient Glows */}
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-emerald-950/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        
        {/* Header Telemetry Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs tracking-wider text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-emerald-400 font-bold tracking-wider">{systemCode}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-slate-500 text-[11px] font-semibold">DEPLOYMENT MODE</span>
            <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 text-emerald-300 text-[11px] font-bold">
              AMaaS / ACTIVE
            </span>
          </div>
        </div>

        {/* Center Dynamic Visual Simulation */}
        <div className="relative my-auto flex items-center justify-center py-4">
          {type === 'hub' && <HubVisual activeTab={activeTab} />}
          {type === 'malls' && <MallsVisual activeTab={activeTab} />}
          {type === 'airports' && <AirportsVisual activeTab={activeTab} />}
          {type === 'healthcare' && <HealthcareVisual activeTab={activeTab} />}
          {type === 'tourism' && <TourismVisual activeTab={activeTab} />}
        </div>

        {/* Footer Status Indicators */}
        <div className="flex items-end justify-between border-t border-slate-800/80 pt-3">
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-widest text-slate-500 font-semibold uppercase">
              {type === 'hub' && 'FLEET ORCHESTRATION & ZERO CAPEX'}
              {type === 'malls' && 'DWELL TIME & REVENUE SHARING'}
              {type === 'airports' && 'FIDS SYNC & PRM AUTO-DOCKING'}
              {type === 'healthcare' && '360° CLINICAL SAFETY & LOGISTICS'}
              {type === 'tourism' && 'WAYPOINT TOURS & MULTILINGUAL AUDIO'}
            </p>
            <p className="mt-0.5 text-lg sm:text-xl font-extrabold text-white flex items-center gap-1.5">
              AUTONOMOUS DISPATCH
              <span className="text-emerald-400 text-sm font-bold">.LIVE</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-emerald-400 shadow-inner">
              {type === 'hub' && <Workflow className="size-5 sm:size-6" />}
              {type === 'malls' && <ShoppingBag className="size-5 sm:size-6" />}
              {type === 'airports' && <Plane className="size-5 sm:size-6" />}
              {type === 'healthcare' && <HeartPulse className="size-5 sm:size-6" />}
              {type === 'tourism' && <Landmark className="size-5 sm:size-6" />}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. HUB & AMaaS ECOSYSTEM VISUAL
───────────────────────────────────────────────────────────── */
function HubVisual({ activeTab }: { activeTab: number }) {
  return (
    <div className="relative flex size-52 sm:size-64 items-center justify-center">
      {/* Outer Orbit */}
      <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-[spin_30s_linear_infinite]" />
      <div className="absolute inset-6 rounded-full border border-emerald-500/30 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
      <div className="absolute inset-16 rounded-full border border-slate-800" />
      
      {/* Central Cloud Orchestration Core */}
      <div className="relative z-10 flex size-24 items-center justify-center rounded-2xl border border-emerald-500/50 bg-emerald-950/80 shadow-[0_0_40px_rgba(5,150,105,0.4)] backdrop-blur-md">
        <div className="flex flex-col items-center justify-center text-center">
          <Workflow className="size-8 text-emerald-400 animate-pulse" />
          <span className="mt-1 text-[10px] font-bold text-emerald-200">AMaaS CORE</span>
        </div>
      </div>

      {/* 4 Satellite Industry Nodes */}
      {/* Top: Malls */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[10px] font-bold text-slate-300 shadow-md">
        <ShoppingBag className="size-3 text-emerald-400" />
        <span>Malls</span>
      </div>

      {/* Right: Airports */}
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[10px] font-bold text-slate-300 shadow-md">
        <Plane className="size-3 text-emerald-400" />
        <span>Airports</span>
      </div>

      {/* Bottom: Healthcare */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[10px] font-bold text-slate-300 shadow-md">
        <HeartPulse className="size-3 text-emerald-400" />
        <span>Healthcare</span>
      </div>

      {/* Left: Tourism */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[10px] font-bold text-slate-300 shadow-md">
        <Landmark className="size-3 text-emerald-400" />
        <span>Tourism</span>
      </div>

      {/* Floating Telemetry Pill */}
      <div className="absolute bottom-4 right-2 z-20 rounded-lg border border-emerald-500/30 bg-slate-900/90 px-2.5 py-1 text-[10px] text-emerald-400 font-bold backdrop-blur-sm">
        CAPEX: $0.00
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. MALLS VISUAL: DWELL TIME & SHOPPING FLOW
───────────────────────────────────────────────────────────── */
function MallsVisual({ activeTab }: { activeTab: number }) {
  return (
    <div className="relative flex size-52 sm:size-64 items-center justify-center">
      {/* Mall Floor Layout SVG Simulation */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        {/* Mall Corridor Paths */}
        <path
          d="M 30 100 Q 70 30, 100 100 T 170 100"
          fill="none"
          stroke="rgba(52, 211, 153, 0.25)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 100 30 L 100 170"
          fill="none"
          stroke="rgba(52, 211, 153, 0.15)"
          strokeWidth="8"
        />
        
        {/* Active Smart Cart Route (Animated Glow) */}
        <path
          d="M 30 100 Q 70 30, 100 100 T 170 100"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeDasharray="6 4"
        />

        {/* Store Zones */}
        <circle cx="50" cy="50" r="14" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
        <text x="50" y="53" fill="#a7f3d0" fontSize="7" textAnchor="middle" fontWeight="bold">ZONE A</text>

        <circle cx="150" cy="50" r="14" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
        <text x="150" y="53" fill="#a7f3d0" fontSize="7" textAnchor="middle" fontWeight="bold">ZONE B</text>

        <circle cx="150" cy="150" r="14" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
        <text x="150" y="153" fill="#a7f3d0" fontSize="7" textAnchor="middle" fontWeight="bold">FOOD CT</text>

        {/* Central Cart Hub */}
        <circle cx="100" cy="100" r="22" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="6" fill="#34d399" />
      </svg>

      {/* Floating Interactive Badge */}
      <div className="absolute top-4 left-3 rounded-lg border border-emerald-500/40 bg-slate-900/90 p-2 shadow-xl backdrop-blur-md text-[10px]">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <Activity className="size-3" />
          <span>DWELL TIME: +45%</span>
        </div>
        <span className="text-slate-400 text-[9px]">Revenue Share Active</span>
      </div>

      <div className="absolute bottom-3 right-3 rounded-lg border border-slate-700 bg-slate-900/90 p-2 text-[10px]">
        <div className="flex items-center gap-1 text-slate-300">
          <Users className="size-3 text-emerald-400" />
          <span>Family Smart Cart</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. AIRPORTS VISUAL: PRM TRANSIT & AUTO-DOCKING
───────────────────────────────────────────────────────────── */
function AirportsVisual({ activeTab }: { activeTab: number }) {
  return (
    <div className="relative flex size-52 sm:size-64 items-center justify-center">
      {/* Airport Concourse Corridor */}
      <div className="absolute inset-x-4 inset-y-10 rounded-2xl border border-slate-800 bg-slate-900/40" />

      {/* Flight Departure Gate Stations */}
      <div className="absolute top-3 left-8 flex items-center gap-1 rounded bg-slate-800/90 px-2 py-0.5 text-[9px] font-bold text-slate-300 border border-slate-700">
        <span>GATE A12</span>
        <span className="size-1.5 rounded-full bg-emerald-400" />
      </div>

      <div className="absolute top-3 right-8 flex items-center gap-1 rounded bg-slate-800/90 px-2 py-0.5 text-[9px] font-bold text-slate-300 border border-slate-700">
        <span>GATE B04</span>
        <span className="size-1.5 rounded-full bg-emerald-400" />
      </div>

      {/* Autonomous PRM Route Loop */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        {/* Outbound Passenger Path */}
        <path
          d="M 40 150 C 40 80, 160 120, 160 50"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeDasharray="5 3"
        />
        {/* Auto-Return Docking Loop */}
        <path
          d="M 160 50 C 180 120, 80 180, 40 150"
          fill="none"
          stroke="rgba(52, 211, 153, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="160" cy="50" r="5" fill="#34d399" />
        <circle cx="40" cy="150" r="8" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
      </svg>

      {/* Center Wheelchair Symbol */}
      <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-emerald-500/50 bg-emerald-950/90 shadow-[0_0_25px_rgba(5,150,105,0.3)]">
        <Plane className="size-6 text-emerald-400" />
      </div>

      {/* Floating Status Pill */}
      <div className="absolute bottom-3 left-4 rounded-lg border border-emerald-500/30 bg-slate-900/90 px-2.5 py-1 text-[10px] text-slate-300">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <RefreshCw className="size-3 animate-spin" />
          <span>AUTO-DOCK: ACTIVE</span>
        </div>
        <span className="text-[9px] text-slate-400">Staff Cost: -50%</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. HEALTHCARE VISUAL: 360° CLINICAL SENSING
───────────────────────────────────────────────────────────── */
function HealthcareVisual({ activeTab }: { activeTab: number }) {
  return (
    <div className="relative flex size-52 sm:size-64 items-center justify-center">
      {/* 360 Degree Safety Field Rings */}
      <div className="absolute inset-2 rounded-full border border-emerald-500/20" />
      <div className="absolute inset-8 rounded-full border border-emerald-500/30 border-dashed" />
      <div className="absolute inset-16 rounded-full border border-emerald-400/40 shadow-[0_0_30px_rgba(5,150,105,0.25)]" />

      {/* Crosshair Corridor Boundary */}
      <div className="absolute inset-x-6 top-1/2 h-px bg-slate-800" />
      <div className="absolute inset-y-6 left-1/2 w-px bg-slate-800" />

      {/* Central Medical AMR Unit */}
      <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-emerald-500/60 bg-emerald-950/90 shadow-[0_0_25px_rgba(5,150,105,0.4)]">
        <HeartPulse className="size-8 text-emerald-400 animate-pulse" />
      </div>

      {/* 4 Obstacle Detection Beams */}
      <div className="absolute top-8 right-10 size-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
      <div className="absolute bottom-10 left-8 size-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
      <div className="absolute top-12 left-12 size-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#6ee7b7]" />
      <div className="absolute bottom-12 right-12 size-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#6ee7b7]" />

      {/* Floating Status Badges */}
      <div className="absolute top-3 right-3 rounded-lg border border-emerald-500/30 bg-slate-900/90 px-2.5 py-1 text-[10px]">
        <span className="font-bold text-emerald-400">360° SENSOR FIELD</span>
        <p className="text-[9px] text-slate-400">0 Collisions / 100% Sterile</p>
      </div>

      <div className="absolute bottom-3 left-3 rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-[10px]">
        <span className="text-slate-300 font-semibold">Nurse Time Saved: +3h</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. TOURISM VISUAL: WAYPOINT GUIDED TOUR
───────────────────────────────────────────────────────────── */
function TourismVisual({ activeTab }: { activeTab: number }) {
  return (
    <div className="relative flex size-52 sm:size-64 items-center justify-center">
      {/* Tour Circuit Path */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        {/* Curving Park / Museum Route */}
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(52, 211, 153, 0.2)" strokeWidth="12" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="8 5" />
        
        {/* Waypoint Stops */}
        {/* WP1 */}
        <circle cx="100" cy="30" r="10" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
        <text x="100" y="33" fill="#a7f3d0" fontSize="7" textAnchor="middle" fontWeight="bold">WP 01</text>
        
        {/* WP2 */}
        <circle cx="170" cy="100" r="10" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
        <text x="170" y="103" fill="#a7f3d0" fontSize="7" textAnchor="middle" fontWeight="bold">WP 02</text>
        
        {/* WP3 */}
        <circle cx="100" cy="170" r="10" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
        <text x="100" y="173" fill="#a7f3d0" fontSize="7" textAnchor="middle" fontWeight="bold">WP 03</text>
        
        {/* WP4 */}
        <circle cx="30" cy="100" r="10" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
        <text x="30" y="103" fill="#a7f3d0" fontSize="7" textAnchor="middle" fontWeight="bold">WP 04</text>
      </svg>

      {/* Central Interactive Guide Core */}
      <div className="relative z-10 flex size-20 items-center justify-center rounded-2xl border border-emerald-500/50 bg-emerald-950/90 shadow-[0_0_30px_rgba(5,150,105,0.35)]">
        <div className="flex flex-col items-center justify-center">
          <Landmark className="size-7 text-emerald-400" />
          <span className="mt-0.5 text-[9px] font-bold text-emerald-200">SMART TOUR</span>
        </div>
      </div>

      {/* Floating Status Badges */}
      <div className="absolute top-2 left-2 rounded-lg border border-emerald-500/30 bg-slate-900/90 px-2 py-1 text-[10px]">
        <div className="flex items-center gap-1 text-emerald-400 font-bold">
          <Radio className="size-3 animate-pulse" />
          <span>AUDIO: 5 LANGUAGES</span>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 rounded-lg border border-slate-700 bg-slate-900/90 px-2 py-1 text-[10px] text-slate-300">
        <span>VIP Guest Exp: 100%</span>
      </div>
    </div>
  );
}

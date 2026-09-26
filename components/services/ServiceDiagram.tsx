'use client';

import React from 'react';
import {
  Cog,
  PackageCheck,
  Wrench,
  Activity,
  ShieldCheck,
  Zap,
  BatteryCharging,
  Radio,
  Cpu,
  Boxes,
  CheckCircle2,
  Sliders,
} from 'lucide-react';

interface ServiceDiagramProps {
  type: 'fleet-maintenance' | 'spare-parts' | 'repairs';
  systemCode?: string;
}

export default function ServiceDiagram({
  type,
  systemCode = 'MITECH-SVC-CORE',
}: ServiceDiagramProps) {
  return (
    <div className="relative aspect-square w-full max-w-[540px] mx-auto overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl shadow-slate-950/40">
      {/* Background Engineering Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52, 211, 153, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 211, 153, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Gradient Glow */}
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Header Telemetry Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs tracking-wider text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-emerald-400 font-bold tracking-wider">{systemCode}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-500 text-[11px] font-semibold">SERVICE SLA ACTIVE</span>
            <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 text-emerald-300 text-[11px] font-bold">
              OPERATIONAL
            </span>
          </div>
        </div>

        {/* Center Dynamic Visual Simulation */}
        <div className="relative my-auto flex items-center justify-center py-4">
          {type === 'fleet-maintenance' && <FleetMaintenanceVisual />}
          {type === 'spare-parts' && <SparePartsVisual />}
          {type === 'repairs' && <RepairsClinicVisual />}
        </div>

        {/* Footer Status Indicators */}
        <div className="flex items-end justify-between border-t border-slate-800/80 pt-3">
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-widest text-slate-500 font-semibold uppercase">
              OPERATIONAL TELEMETRY
            </p>
            <p className="mt-0.5 text-lg sm:text-xl font-extrabold text-white flex items-center gap-1.5">
              HEALTH STATUS
              <span className="text-emerald-400 text-sm font-bold">.OPTIMAL</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-emerald-400 shadow-inner">
              {type === 'fleet-maintenance' && <Cog className="size-5 sm:size-6" />}
              {type === 'spare-parts' && <PackageCheck className="size-5 sm:size-6" />}
              {type === 'repairs' && <Wrench className="size-5 sm:size-6" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. FLEET MAINTENANCE & TELEMETRY RADAR VISUAL
───────────────────────────────────────────────────────────── */
function FleetMaintenanceVisual() {
  return (
    <div className="relative flex size-56 sm:size-64 items-center justify-center">
      {/* Concentric Telemetry Circles */}
      <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
      <div className="absolute inset-6 rounded-full border border-emerald-500/30 border-dashed animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-14 rounded-full border border-slate-700/60" />
      <div className="absolute inset-20 rounded-full border border-emerald-400/40 shadow-[0_0_25px_rgba(5,150,105,0.2)]" />

      {/* Axis Crosshairs */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-slate-800/80" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-slate-800/80" />

      {/* Rotating Radar Sweep */}
      <div
        className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, rgba(52, 211, 153, 0.3) 0deg, transparent 60deg, transparent 360deg)',
          animation: 'spin 6s linear infinite',
        }}
      />

      {/* Central Fleet Health Hub */}
      <div className="relative z-10 flex size-20 sm:size-24 flex-col items-center justify-center rounded-full border-2 border-emerald-400 bg-slate-900 shadow-[0_0_25px_rgba(52,211,153,0.5)]">
        <Activity className="size-6 text-emerald-400 animate-pulse" />
        <span className="text-[11px] font-extrabold text-white mt-0.5">SLA 99.8%</span>
        <span className="text-[9px] font-semibold text-emerald-400">UPTIME</span>
      </div>

      {/* Node 1: Terminal Airport Bot (Top Right) */}
      <div className="absolute top-2 right-4 flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2 py-1 shadow-md">
        <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[10px] font-bold text-slate-200">BOT-01 / TRM</span>
        <span className="rounded bg-emerald-950 px-1 py-0.2 text-[8px] font-bold text-emerald-300">98%</span>
      </div>

      {/* Node 2: Mall Cart (Bottom Left) */}
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2 py-1 shadow-md">
        <span className="size-2 rounded-full bg-cyan-400" />
        <span className="text-[10px] font-bold text-slate-200">CART-04 / MALL</span>
        <span className="rounded bg-cyan-950 px-1 py-0.2 text-[8px] font-bold text-cyan-300">ACTIVE</span>
      </div>

      {/* Node 3: Standby Unit (Top Left) */}
      <div className="absolute top-8 left-2 flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2 py-1 shadow-md">
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="text-[9px] font-bold text-slate-200">STB-UNIT</span>
        <span className="rounded bg-amber-950 px-1 py-0.2 text-[8px] font-bold text-amber-300">READY</span>
      </div>

      {/* Live Measurement Badge */}
      <div className="absolute bottom-2 right-2 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[10px] font-bold text-slate-300 shadow-lg">
        <span className="text-emerald-400 font-bold">MTTR:</span> &lt;3.2h
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. OEM SPARE PARTS & COMPONENT MATRIX VISUAL
───────────────────────────────────────────────────────────── */
function SparePartsVisual() {
  return (
    <div className="relative flex size-56 sm:size-64 flex-col items-center justify-center">
      {/* Outer Verification Hexagon / Orbit Ring */}
      <div className="absolute size-48 sm:size-56 rounded-full border border-emerald-500/25 bg-emerald-950/10 animate-[spin_30s_linear_infinite]" />
      <div className="absolute size-36 sm:size-44 rounded-full border border-dashed border-blue-500/30" />

      {/* Central Genuine OEM Chip / Hologram */}
      <div className="relative z-10 flex size-24 sm:size-28 flex-col items-center justify-center rounded-2xl border-2 border-emerald-400 bg-slate-900 p-2 shadow-[0_0_30px_rgba(52,211,153,0.4)]">
        <ShieldCheck className="size-7 text-emerald-400 animate-pulse" />
        <span className="mt-1 text-[11px] font-black tracking-wider text-white">GENUINE OEM</span>
        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300 mt-0.5">
          100% AUTHENTIC
        </span>
      </div>

      {/* Exploded Component Nodes */}
      {/* Node 1: FOC Motor Drive (Top) */}
      <div className="absolute -top-1 flex flex-col items-center">
        <div className="flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900/95 px-2 py-0.5 text-[10px] font-bold text-slate-200 shadow">
          <Cpu className="size-3 text-emerald-400" />
          <span>FOC CONTROLLER</span>
        </div>
        <div className="h-4 w-px border-r border-dashed border-emerald-400/60" />
      </div>

      {/* Node 2: Smart LiFePO4 BMS (Bottom Right) */}
      <div className="absolute bottom-0 right-1 flex flex-col items-center">
        <div className="h-3 w-px border-r border-dashed border-cyan-400/60" />
        <div className="flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900/95 px-2 py-0.5 text-[10px] font-bold text-slate-200 shadow">
          <BatteryCharging className="size-3 text-cyan-400" />
          <span>SMART BMS 24V</span>
        </div>
      </div>

      {/* Node 3: 360 LiDAR Sensor (Bottom Left) */}
      <div className="absolute bottom-0 left-1 flex flex-col items-center">
        <div className="h-3 w-px border-r border-dashed border-purple-400/60" />
        <div className="flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900/95 px-2 py-0.5 text-[10px] font-bold text-slate-200 shadow">
          <Radio className="size-3 text-purple-400" />
          <span>360° LIDAR</span>
        </div>
      </div>

      {/* Barcode / Serial Tracking Stamp */}
      <div className="absolute top-8 right-0 rounded border border-emerald-500/30 bg-emerald-950/80 px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-300 shadow">
        SN: MTC-OEM-8924
      </div>

      {/* Fast Dispatch Badge */}
      <div className="absolute top-8 left-0 rounded border border-blue-500/30 bg-blue-950/80 px-2 py-0.5 text-[9px] font-bold text-blue-300 shadow">
        24H DISPATCH
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. REPAIRS CLINIC & MECHATRONIC TEST STAND VISUAL
───────────────────────────────────────────────────────────── */
function RepairsClinicVisual() {
  return (
    <div className="relative flex size-56 sm:size-64 flex-col items-center justify-center">
      {/* Test Stand Frame */}
      <div className="relative size-48 sm:size-52 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col justify-between shadow-inner">
        {/* Top Oscilloscope Simulation */}
        <div className="h-16 w-full rounded-lg bg-slate-950 border border-slate-800 p-2 relative overflow-hidden">
          <div className="flex justify-between text-[8px] font-mono text-slate-500 mb-1">
            <span>CH1: MOTOR-LOAD</span>
            <span className="text-emerald-400">PASSED</span>
          </div>
          {/* Animated Waveform */}
          <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 20">
            <path
              d="M0 10 Q12.5 0, 25 10 T50 10 T75 10 T100 10"
              fill="none"
              stroke="#34d399"
              strokeWidth="1.5"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Center Joystick / Driver Diagnostic Nodes */}
        <div className="flex items-center justify-around py-2">
          <div className="flex flex-col items-center">
            <Sliders className="size-6 text-emerald-400" />
            <span className="text-[9px] font-bold text-slate-300 mt-1">JOYSTICK</span>
            <span className="text-[8px] text-emerald-400">CALIBRATED</span>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div className="flex flex-col items-center">
            <Zap className="size-6 text-blue-400" />
            <span className="text-[9px] font-bold text-slate-300 mt-1">MOSFETS</span>
            <span className="text-[8px] text-blue-400">100% OK</span>
          </div>
        </div>

        {/* Bottom Load Status */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-1 text-[9px] text-slate-400 font-mono">
          <span>DYNAMIC TEST</span>
          <span className="text-emerald-400 font-bold">120kg LOAD OK</span>
        </div>
      </div>

      {/* Floating Certificate Stamp */}
      <div className="absolute -bottom-2 right-2 rounded-lg border border-emerald-500/40 bg-emerald-950/90 px-2 py-1 text-[10px] font-bold text-emerald-300 shadow-xl">
        ✓ QC CERTIFIED
      </div>
    </div>
  );
}

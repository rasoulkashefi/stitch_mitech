'use client';

import React from 'react';
import {
  Radar,
  Gauge,
  Boxes,
  Activity,
  CircuitBoard,
  Wifi,
} from 'lucide-react';

interface TechnicalDiagramProps {
  type: 'navigation' | 'drives' | 'twin';
  systemCode?: string;
}

export default function TechnicalDiagram({
  type,
  systemCode = 'MITECH-SYS-CORE',
}: TechnicalDiagramProps) {
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
            <span className="hidden sm:inline text-slate-500 text-[11px] font-semibold">DIAGNOSTIC MATRIX</span>
            <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 text-emerald-300 text-[11px] font-bold">
              ONLINE
            </span>
          </div>
        </div>

        {/* Center Dynamic Visual Simulation */}
        <div className="relative my-auto flex items-center justify-center py-4">
          {type === 'navigation' && <NavigationVisual />}
          {type === 'drives' && <DrivesVisual />}
          {type === 'twin' && <DigitalTwinVisual />}
        </div>

        {/* Footer Status Indicators */}
        <div className="flex items-end justify-between border-t border-slate-800/80 pt-3">
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-widest text-slate-500 font-semibold uppercase">
              CORE HARDWARE TELEMETRY
            </p>
            <p className="mt-0.5 text-lg sm:text-xl font-extrabold text-white flex items-center gap-1.5">
              REAL-TIME SYNC
              <span className="text-emerald-400 text-sm font-bold">.OK</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-emerald-400 shadow-inner">
              {type === 'navigation' && <Radar className="size-5 sm:size-6" />}
              {type === 'drives' && <Gauge className="size-5 sm:size-6" />}
              {type === 'twin' && <Boxes className="size-5 sm:size-6" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. NAVIGATION & 360° SLAM VISUAL
───────────────────────────────────────────────────────────── */
function NavigationVisual() {
  return (
    <div className="relative flex size-52 sm:size-64 items-center justify-center">
      {/* Concentric Sensor Rings */}
      <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
      <div className="absolute inset-6 rounded-full border border-emerald-500/30 border-dashed" />
      <div className="absolute inset-12 rounded-full border border-slate-700/60" />
      <div className="absolute inset-20 rounded-full border border-emerald-400/40 shadow-[0_0_25px_rgba(5,150,105,0.2)]" />

      {/* Axis Crosshairs */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-slate-800" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-slate-800" />

      {/* Radar Sweep Effect */}
      <div className="absolute inset-0 rounded-full radar-sweep opacity-75" />

      {/* Point Cloud & Obstacle Scatter Nodes */}
      <div className="absolute top-[22%] right-[28%] flex items-center gap-1">
        <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-ping" />
        <span className="size-1.5 rounded-full bg-emerald-400" />
      </div>
      <div className="absolute bottom-[30%] left-[22%] size-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#6ee7b7]" />
      <div className="absolute top-[65%] right-[20%] size-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
      <div className="absolute top-[18%] left-[35%] size-1.5 rounded-full bg-emerald-500" />
      <div className="absolute bottom-[18%] right-[40%] size-2 rounded-full bg-emerald-400" />

      {/* Obstacle Box Detected */}
      <div className="absolute top-[28%] left-[16%] rounded border border-amber-400/80 bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 shadow-sm backdrop-blur-xs">
        OBSTACLE [1.4m]
      </div>

      {/* Robot Central Node */}
      <div className="relative z-10 flex size-14 sm:size-16 items-center justify-center rounded-full border-2 border-emerald-400 bg-slate-900 shadow-[0_0_20px_rgba(52,211,153,0.6)]">
        <div className="absolute -top-2 size-2 rounded-full bg-emerald-400" />
        <Radar className="size-7 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      {/* Live Measurement Overlay */}
      <div className="absolute bottom-2 right-2 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[11px] font-bold text-slate-300 shadow-lg">
        <span className="text-emerald-400 font-bold">SLAM ACC:</span> ±1.6cm
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. FOC DRIVES & MOTION CONTROL SCHEMATIC
───────────────────────────────────────────────────────────── */
function DrivesVisual() {
  return (
    <div className="relative flex size-52 sm:size-64 flex-col items-center justify-center">
      {/* Outer Rotor Circuit Ring */}
      <div className="absolute size-48 sm:size-56 rounded-full border border-blue-500/30 bg-blue-950/20" />
      
      {/* 3-Phase Stator Poles (U, V, W) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Phase U */}
        <div className="absolute top-2 flex flex-col items-center">
          <span className="text-[10px] text-blue-400 font-bold">PHASE-U</span>
          <div className="h-4 w-6 rounded-t border border-blue-400 bg-blue-500/30" />
        </div>
        {/* Phase V */}
        <div className="absolute bottom-5 left-5 flex flex-col items-center -rotate-45">
          <span className="text-[10px] text-emerald-400 font-bold">PHASE-V</span>
          <div className="h-4 w-6 rounded-t border border-emerald-400 bg-emerald-500/30" />
        </div>
        {/* Phase W */}
        <div className="absolute bottom-5 right-5 flex flex-col items-center rotate-45">
          <span className="text-[10px] text-cyan-400 font-bold">PHASE-W</span>
          <div className="h-4 w-6 rounded-t border border-cyan-400 bg-cyan-500/30" />
        </div>
      </div>

      {/* Central Hub Rotor & Torque Vector */}
      <div className="relative z-10 flex size-24 sm:size-28 items-center justify-center rounded-full border-2 border-dashed border-emerald-400 bg-slate-900 shadow-[0_0_30px_rgba(5,150,105,0.4)]">
        <div className="flex flex-col items-center text-center">
          <Activity className="size-6 text-emerald-400 animate-pulse" />
          <span className="text-[11px] text-slate-300 font-extrabold mt-1">FOC 20kHz</span>
          <span className="text-[10px] text-emerald-400 font-bold">80 N.m</span>
        </div>
      </div>

      {/* Floating Sensor Badges */}
      <div className="absolute top-4 left-2 rounded border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[10px] font-bold text-slate-300 shadow">
        <span className="text-blue-400">ENC:</span> 4096 CPR
      </div>
      <div className="absolute bottom-2 left-2 rounded border border-emerald-500/30 bg-emerald-950/80 px-2 py-0.5 text-[10px] font-bold text-emerald-300 shadow">
        <span className="text-emerald-400">KERS:</span> REGEN 94%
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. DIGITAL TWIN & CLOUD ORCHESTRATION VISUAL
───────────────────────────────────────────────────────────── */
function DigitalTwinVisual() {
  return (
    <div className="relative flex size-52 sm:size-64 flex-col items-center justify-center">
      {/* 3D Stacked Wireframe Isometric Planes */}
      <div className="relative h-44 w-52 sm:w-56">
        
        {/* Layer 3: Cloud Orchestration Layer (Top) */}
        <div className="absolute inset-x-4 top-2 h-16 skew-y-[-14deg] rounded-xl border border-purple-400/60 bg-purple-500/10 backdrop-blur-xs flex items-center justify-between px-3 shadow-lg">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-purple-400 animate-ping" />
            <span className="text-[10px] text-purple-300 font-bold">CLOUD TWIN</span>
          </div>
          <Wifi className="size-3.5 text-purple-400" />
        </div>

        {/* Data Sync Connector Beams */}
        <div className="absolute left-10 top-12 h-10 w-px border-r border-dashed border-emerald-400/80 animate-pulse" />
        <div className="absolute right-12 top-12 h-10 w-px border-r border-dashed border-purple-400/80 animate-pulse" />

        {/* Layer 2: Spatial AI & Path Planner (Middle) */}
        <div className="absolute inset-x-4 top-14 h-16 skew-y-[-14deg] rounded-xl border border-emerald-400/70 bg-emerald-500/15 backdrop-blur-xs flex items-center justify-between px-3 shadow-md">
          <div className="flex items-center gap-1.5">
            <CircuitBoard className="size-3.5 text-emerald-400" />
            <span className="text-[10px] text-emerald-300 font-bold">FLEET AI DISPATCH</span>
          </div>
          <span className="rounded bg-emerald-900/80 px-1.5 py-0.5 text-[9px] font-bold text-emerald-200">
            48 NODES
          </span>
        </div>

        {/* Layer 1: Physical Facility & Robot Nodes (Bottom) */}
        <div className="absolute inset-x-4 top-26 h-16 skew-y-[-14deg] rounded-xl border border-slate-700 bg-slate-900/90 flex items-center justify-around px-2">
          {/* Node 1 */}
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span className="text-[9px] font-bold text-slate-300">BOT-01</span>
          </div>
          {/* Node 2 */}
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            <span className="text-[9px] font-bold text-slate-300">BOT-02</span>
          </div>
          {/* Node 3 */}
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
            <span className="text-[9px] font-bold text-slate-300">DOCK-A</span>
          </div>
        </div>

      </div>

      {/* Floating Latency Indicator */}
      <div className="absolute -bottom-1 right-2 rounded-lg border border-slate-800 bg-slate-900/95 px-2.5 py-1 text-[11px] font-bold text-slate-300 shadow-xl">
        <span className="text-emerald-400 font-bold">WSS LATENCY:</span> 32ms
      </div>
    </div>
  );
}

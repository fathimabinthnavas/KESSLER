# KESSLER — The Living Graveyard of Space

An interactive 3D celestial observatory tracking humanity's orbital footprint, satellites, and the rising cascade of space debris from 1960 to 2026. Built for competition.

---

## 🚀 Progress Milestones

### ✅ Milestone 1: Celestial Anchor
- [x] Webpage boots with Vite & React.
- [x] Dark futuristic space museum aesthetic with starry particle background.
- [x] Title header: **"KESSLER — THE LIVING GRAVEYARD OF SPACE"**.
- [x] Interactive 3D Earth globe powered by Three.js & OrbitControls (drag to rotate, scroll to zoom).
- [x] Atmospheric cyan glow, day/night lighting, and coordinate grid lines.

### ✅ Milestone 2: Orbital Payloads & Debris Field
- [x] **Active Satellites & Space Debris**: Real-time 3D orbital propagation around Earth at calibrated altitudes.
- [x] **Orbital Trajectory Lines**: Glowing 3D rings visualizing inclinations and orbits.
- [x] **Interactive Raycasting**: Hover over any satellite to highlight it; click to inspect.
- [x] **Holographic Museum Dossier**: Glassmorphism panel with NORAD ID, launch year, altitude, inclination, operator, museum narrative, and Kessler cascade threat level.
- [x] **Filter Layers**: Toggle between **All Objects**, **Active Satellites**, or **Space Debris**.
- [x] **Quick-Target Strip**: Instant selector chips to target satellites directly.

### ✅ Milestone 3 & Time Travel: 1960 ➔ 2026 Year-by-Year Graveyard Growth
- [x] **1960 to 2026 Time Travel Slider**:
  - Interactive year-by-year scrubber spanning 66 years of spaceflight history.
  - **▶ PLAY TIMELINE**: Automatically advances the year year-by-year from 1960 to 2026.
  - **Decade Quick-Jumpers**: 1960, 1970, 1985, 2000, 2007, 2009, 2020, 2026.
- [x] **Dynamic Space Debris Particle Swarm**:
  - ~550 procedural orbital debris fragments calibrated to historical accumulation curves.
  - Watch Low Earth Orbit fill up from a near-empty planet in 1960 into an intense, glowing graveyard shell by 2026.
  - Sudden surges visible during major historical breakup events (1961 Thor-Ablestar, 1985 Solwind, 2007 FY-1C, 2009 Cosmos-Iridium, 2024 Long March 6A).
- [x] **Historical Milestones Banner**: Explains the exact historical context for whichever year is selected.
- [x] **Real-Time Collision & Conjunction Radar**: Pairwise distance detection and 3D red warning laser beams for close crossings.

---

## 🛠️ How to Run Locally

If the server is not already running:

```powershell
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000/
```

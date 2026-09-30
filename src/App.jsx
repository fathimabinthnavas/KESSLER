import React, { useState, useEffect } from 'react';
import EarthGlobe from './components/EarthGlobe';
import ObjectDossier from './components/ObjectDossier';
import TimeControls from './components/TimeControls';
import CollisionAlert from './components/CollisionAlert';
import { ORBITAL_OBJECTS, getTimelineEventForYear } from './data/orbitalObjects';

export default function App() {
  const [selectedObject, setSelectedObject] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'debris'
  const [currentYear, setCurrentYear] = useState(2026);
  const [isPaused, setIsPaused] = useState(false);
  const [timeSpeed, setTimeSpeed] = useState(1);
  const [conjunctions, setConjunctions] = useState([]);
  const [isAutoAdvancingYear, setIsAutoAdvancingYear] = useState(false);

  // Auto-advance timeline year by year (1960 -> 2026)
  useEffect(() => {
    if (!isAutoAdvancingYear) return;

    const timer = setInterval(() => {
      setCurrentYear((prev) => {
        if (prev >= 2026) {
          setIsAutoAdvancingYear(false);
          return 2026;
        }
        return prev + 1;
      });
    }, 3600);

    return () => clearInterval(timer);
  }, [isAutoAdvancingYear]);

  // Objects launched by currentYear
  const visibleObjects = ORBITAL_OBJECTS.filter((o) => o.launchYear <= currentYear);
  const activeCount = visibleObjects.filter((o) => o.type === 'active').length;
  const debrisCount = visibleObjects.filter((o) => o.type === 'debris').length;

  // Real-world calibrated catalog estimation based on historical growth
  const estimatedTotalCatalogedDebris = Math.round(
    currentYear < 1965
      ? 20 + (currentYear - 1960) * 15
      : currentYear < 1980
      ? 150 + (currentYear - 1965) * 60
      : currentYear < 2000
      ? 1100 + (currentYear - 1980) * 180
      : currentYear < 2007
      ? 4800 + (currentYear - 2000) * 350
      : currentYear < 2010
      ? 12000 + (currentYear - 2007) * 2200
      : 19000 + (currentYear - 2010) * 1400
  );

  // Historical event for current year
  const timelineEvent = getTimelineEventForYear(currentYear);

  // Dynamic Kessler Cascade Index calculation
  const cascadeRiskPercent = Math.min(
    98,
    Math.round(
      (currentYear - 1960) * 0.9 +
      (conjunctions.length * 14) +
      (currentYear >= 2007 ? 12 : 0) +
      (currentYear >= 2009 ? 12 : 0)
    )
  );

  const cascadeStatus =
    cascadeRiskPercent > 65
      ? 'CRITICAL'
      : cascadeRiskPercent > 35
      ? 'ELEVATED'
      : 'NOMINAL';

  const cascadeColorClass =
    cascadeRiskPercent > 65
      ? 'text-red'
      : cascadeRiskPercent > 35
      ? 'text-amber'
      : 'text-cyan';

  return (
    <div className="app-container">
      {/* 3D WebGL Canvas Layer */}
      <EarthGlobe
        selectedObject={selectedObject}
        onSelectObject={setSelectedObject}
        filter={filter}
        currentYear={currentYear}
        isPaused={isPaused}
        timeSpeed={timeSpeed}
        onConjunctionUpdate={setConjunctions}
      />

      {/* Cinematic Vignette */}
      <div className="vignette" />

      {/* Futuristic Museum HUD Layer */}
      <div className="hud-overlay">
        {/* Compact Slim Top Navigation Bar */}
        <header className="hud-top-bar interactive-hud">
          {/* Left: Compact Logo & Title */}
          <div className="brand-group">
            <div className="museum-badge">
              <span className="status-dot"></span>
              <span>OBSERVATORY</span>
            </div>
            <div className="brand-titles">
              <h1 className="hud-title">KESSLER</h1>
              <span className="hud-subtitle">THE LIVING GRAVEYARD OF SPACE</span>
            </div>
          </div>

          {/* Center: Real-time Collision Conjunction Radar Alert */}
          <div className="radar-center-slot">
            <CollisionAlert
              conjunctions={conjunctions}
              onSelectObject={setSelectedObject}
            />
          </div>

          {/* Right: Layer Filter Buttons */}
          <div className="filter-bar">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              ALL ({visibleObjects.length})
            </button>
            <button
              className={`filter-btn active-sat ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              SATELLITES ({activeCount})
            </button>
            <button
              className={`filter-btn debris ${filter === 'debris' ? 'active' : ''}`}
              onClick={() => setFilter('debris')}
            >
              DEBRIS ({debrisCount})
            </button>
          </div>
        </header>

        {/* Selected Object Holographic Dossier Drawer (Floats in Upper Right) */}
        {selectedObject && (
          <ObjectDossier
            object={selectedObject}
            onClose={() => setSelectedObject(null)}
          />
        )}

        {/* Bottom Section: Left column (Timeline + Targets) and Right corner (Telemetry) */}
        <footer className="hud-footer">

          {/* LEFT COLUMN: Time Travel Panel stacked above Targets card */}
          <div className="left-hud-column">

            {/* Time Travel & Epoch Dock — LEFT SIDE */}
            <TimeControls
              currentYear={currentYear}
              onYearChange={(yr) => {
                setIsAutoAdvancingYear(false);
                setCurrentYear(yr);
              }}
              isPaused={isPaused}
              onTogglePause={() => setIsPaused((p) => !p)}
              timeSpeed={timeSpeed}
              onSpeedChange={setTimeSpeed}
              isAutoAdvancingYear={isAutoAdvancingYear}
              onToggleAutoAdvanceYear={() => {
                if (currentYear >= 2026) {
                  setCurrentYear(1960);
                }
                setIsAutoAdvancingYear((prev) => !prev);
              }}
              timelineEvent={timelineEvent}
            />

            {/* Targets Quick-Select Strip */}
            <div className="info-card-compact interactive-hud">
              <div className="card-top-row">
                <span className="info-label">TARGETS ({currentYear})</span>
                <span className="controls-hint">Drag: Rotate • Scroll: Zoom</span>
              </div>
              <div className="quick-chips">
                {visibleObjects.map((obj) => (
                  <button
                    key={obj.id}
                    className={`quick-chip ${selectedObject?.id === obj.id ? 'active' : ''} ${obj.type}`}
                    onClick={() => setSelectedObject(obj)}
                    title={`Target ${obj.name}`}
                  >
                    {obj.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Compact Telemetry & Kessler Index */}
          <div className="telemetry-panel-compact interactive-hud">
            <div className="telemetry-row">
              <span>EST. DEBRIS:</span>
              <span className="telemetry-val text-amber">
                ~{estimatedTotalCatalogedDebris.toLocaleString()}
              </span>
            </div>
            <div className="telemetry-row">
              <span>CROSSINGS:</span>
              <span className={`telemetry-val ${conjunctions.length > 0 ? 'text-red alert-pulse' : 'text-cyan'}`}>
                {conjunctions.length} ACTIVE
              </span>
            </div>
            <div className="telemetry-row">
              <span>KESSLER RISK:</span>
              <span className={`telemetry-val ${cascadeColorClass}`}>
                {cascadeRiskPercent}% ({cascadeStatus})
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

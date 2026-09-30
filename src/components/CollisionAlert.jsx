import React from 'react';

export default function CollisionAlert({ conjunctions = [], onSelectObject }) {
  if (conjunctions.length === 0) {
    return (
      <div className="radar-status-bar interactive-hud safe">
        <span className="radar-ping safe-ping"></span>
        <span className="radar-text">ORBITAL CONJUNCTION RADAR: NOMINAL // ZERO CRITICAL CROSSINGS</span>
      </div>
    );
  }

  const primary = conjunctions[0];

  return (
    <div className="radar-status-bar interactive-hud warning">
      <span className="radar-ping alert-ping"></span>
      <div className="radar-content">
        <div className="radar-title-row">
          <span className="radar-alert-badge">CONJUNCTION ALERT</span>
          <span className="radar-distance">
            EST. SEPARATION: <strong>{primary.distanceKm} KM</strong>
          </span>
        </div>
        <div className="radar-parties">
          <button
            className="radar-target-btn text-cyan"
            onClick={() => onSelectObject(primary.objA)}
            title="Inspect object"
          >
            {primary.objA.name}
          </button>
          <span className="radar-vs">⚡ INTERSECTING ⚡</span>
          <button
            className="radar-target-btn text-amber"
            onClick={() => onSelectObject(primary.objB)}
            title="Inspect object"
          >
            {primary.objB.name}
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function ObjectDossier({ object, onClose }) {
  if (!object) return null;

  const isDebris = object.type === 'debris';

  return (
    <div className="dossier-panel interactive-hud">
      <div className="dossier-header">
        <div className="dossier-type-badge" data-type={object.type}>
          <span className="dossier-pulse"></span>
          <span>{isDebris ? 'SPACE DEBRIS / DERELICT' : 'ACTIVE SATELLITE'}</span>
        </div>
        <button className="dossier-close-btn" onClick={onClose} title="Close dossier">
          ✕
        </button>
      </div>

      <h2 className="dossier-title">{object.name}</h2>
      <p className="dossier-category">{object.category}</p>

      {/* Primary Telemetry Grid */}
      <div className="dossier-stats-grid">
        <div className="stat-box">
          <span className="stat-label">NORAD ID</span>
          <span className="stat-value">{object.noradId}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">LAUNCH YEAR</span>
          <span className="stat-value">{object.launchYear}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">ALTITUDE</span>
          <span className="stat-value">{object.altitudeKm.toLocaleString()} KM</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">INCLINATION</span>
          <span className="stat-value">{object.inclination}°</span>
        </div>
      </div>

      {/* Origin / Operator */}
      <div className="dossier-section">
        <div className="section-label">ORIGIN / OPERATOR</div>
        <div className="section-body">{object.country}</div>
      </div>

      {/* Museum Archive Narrative */}
      <div className="dossier-section">
        <div className="section-label">MUSEUM ARCHIVE SUMMARY</div>
        <div className="section-body narrative">{object.description}</div>
      </div>

      {/* Kessler Cascade Assessment */}
      <div className="dossier-section threat-section" data-threat={isDebris ? 'high' : 'low'}>
        <div className="section-label">KESSLER CASCADE RISK</div>
        <div className="section-body threat-text">{object.kesslerThreat}</div>
      </div>
    </div>
  );
}

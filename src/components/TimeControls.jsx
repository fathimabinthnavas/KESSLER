import React from 'react';

export default function TimeControls({
  currentYear,
  onYearChange,
  isPaused,
  onTogglePause,
  timeSpeed,
  onSpeedChange,
  isAutoAdvancingYear,
  onToggleAutoAdvanceYear,
  timelineEvent
}) {
  const getEpochName = (year) => {
    if (year < 1970) return 'EARLY SPACE AGE';
    if (year < 1990) return 'COLD WAR & ASAT RACE';
    if (year < 2007) return 'LEO EXPANSION & ISS';
    if (year < 2019) return 'CATACLYSMIC COLLISIONS';
    return 'MEGACONSTELLATION SWARM';
  };

  return (
    <div className="time-controls-panel interactive-hud">
      {/* Top row: Year & Highly Visible Epoch Badge */}
      <div className="time-controls-header">
        <div className="time-hero-group">
          <span className="year-hero">{currentYear}</span>
          <div className="epoch-container">
            <span className="epoch-pill">
              <span className="epoch-dot"></span>
              EPOCH: {getEpochName(currentYear)}
            </span>
            {timelineEvent && (
              <span className="timeline-event-snippet" title={timelineEvent.description}>
                {timelineEvent.title}
              </span>
            )}
          </div>
        </div>

        {/* Playback Controls */}
        <div className="playback-actions">
          <div className="action-row">
            <button
              className={`timeline-play-btn ${isAutoAdvancingYear ? 'advancing' : ''}`}
              onClick={onToggleAutoAdvanceYear}
              title="Automatically advance year by year from 1960 to 2026"
            >
              {isAutoAdvancingYear ? '⏹ STOP' : '▶ PLAY TIMELINE'}
            </button>

            <button
              className={`play-pause-btn ${isPaused ? 'paused' : 'playing'}`}
              onClick={onTogglePause}
              title={isPaused ? 'Resume Orbit Motion' : 'Freeze Orbit Motion'}
            >
              {isPaused ? '▶ ORBIT' : '❚❚ FREEZE'}
            </button>
          </div>

          <div className="speed-toggles">
            <span className="speed-label">SPEED:</span>
            {[1, 5, 20].map((speed) => (
              <button
                key={speed}
                className={`speed-btn ${timeSpeed === speed ? 'active' : ''}`}
                onClick={() => onSpeedChange(speed)}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Slider: 1960 to 2026 */}
      <div className="timeline-slider-row">
        <span className="timeline-bound">1960</span>
        <input
          type="range"
          min="1960"
          max="2026"
          step="1"
          value={currentYear}
          onChange={(e) => onYearChange(parseInt(e.target.value, 10))}
          className="timeline-slider"
          title={`Year: ${currentYear}`}
        />
        <span className="timeline-bound highlight">2026</span>
      </div>

      {/* Quick Decades Jumper */}
      <div className="timeline-decades-strip">
        {[1960, 1970, 1985, 2000, 2007, 2009, 2020, 2026].map((yr) => (
          <button
            key={yr}
            className={`decade-btn ${currentYear === yr ? 'active' : ''}`}
            onClick={() => onYearChange(yr)}
          >
            {yr}
          </button>
        ))}
      </div>
    </div>
  );
}

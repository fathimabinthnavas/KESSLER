/**
 * Curated orbital catalog representing active satellites and historic space debris.
 * Altitudes and inclinations are scaled for optimal 3D visualization around Earth (Radius = 2.2 units).
 */
export const ORBITAL_OBJECTS = [
  // --- HISTORIC DEBRIS & SATELLITES (1960 - 1980) ---
  {
    id: 'deb-vanguard1',
    name: 'Vanguard 1 (Derelict)',
    type: 'debris',
    category: 'Historic Derelict',
    noradId: '00005',
    launchYear: 1958, // Active in 1960, oldest derelict
    country: 'United States (US Navy)',
    altitudeKm: 650,
    orbitRadius: 2.75,
    inclination: 34.2,
    speed: 0.011,
    size: 0.08,
    color: '#fbbf24',
    description: 'The oldest artificial human artifact still orbiting Earth. In orbit since the dawn of spaceflight; will circle Earth for centuries.',
    kesslerThreat: 'Moderate (Uncontrolled tumbling derelict in high LEO).'
  },
  {
    id: 'deb-thor-ablestar',
    name: 'Thor-Ablestar Breakup Debris',
    type: 'debris',
    category: 'Explosion Fragment',
    noradId: '00118',
    launchYear: 1961,
    country: 'United States (DoD)',
    altitudeKm: 950,
    orbitRadius: 3.1,
    inclination: 66.8,
    speed: 0.010,
    size: 0.06,
    color: '#ef4444',
    description: 'Result of the very first recorded accidental explosion in orbit in June 1961, creating almost 300 pieces of cataloged debris.',
    kesslerThreat: 'High (Historic fragment in long-lived polar orbit).'
  },
  {
    id: 'deb-transit-4a',
    name: 'Transit 4A Dead Satellite',
    type: 'debris',
    category: 'Derelict Navigation',
    noradId: '00116',
    launchYear: 1961,
    country: 'United States (US Navy)',
    altitudeKm: 928,
    orbitRadius: 3.18,
    inclination: 66.8,
    speed: 0.009,
    size: 0.09,
    color: '#f59e0b',
    description: 'First satellite with a nuclear radioisotope thermoelectric generator, now a silent derelict orbiting at nearly 1,000 km.',
    kesslerThreat: 'Moderate (High altitude derelict with multi-century lifetime).'
  },
  {
    id: 'deb-solwind',
    name: 'P78-1 Solwind ASAT Fragment',
    type: 'debris',
    category: 'ASAT Shrapnel',
    noradId: '11278',
    launchYear: 1979,
    country: 'United States (USAF Test)',
    altitudeKm: 525,
    orbitRadius: 2.8,
    inclination: 97.6,
    speed: 0.012,
    size: 0.06,
    color: '#ef4444',
    description: 'In 1985, an F-15 fired an ASM-135 ASAT missile at Solwind, completely obliterating the satellite into hundreds of hypervelocity shards.',
    kesslerThreat: 'High (Milestone kinetic destruction event).'
  },

  // --- 1990s to 2009 MISSIONS & COLLISION HAZARDS ---
  {
    id: 'sat-hubble',
    name: 'Hubble Space Telescope',
    type: 'active',
    category: 'Space Observatory',
    noradId: '20580',
    launchYear: 1990,
    country: 'United States (NASA / ESA)',
    altitudeKm: 480,
    orbitRadius: 2.85,
    inclination: 28.5,
    speed: 0.012,
    size: 0.10,
    color: '#38bdf8',
    description: 'One of the most vital scientific instruments in human history, revolutionizing astrophysics from above Earth’s atmosphere.',
    kesslerThreat: 'Moderate (High orbital longevity without propulsion system).'
  },
  {
    id: 'deb-sl16',
    name: 'Zenit-2 / SL-16 Spent Booster',
    type: 'debris',
    category: 'Spent Rocket Stage',
    noradId: '22285',
    launchYear: 1992,
    country: 'Russia',
    altitudeKm: 840,
    orbitRadius: 3.25,
    inclination: 71.0,
    speed: 0.011,
    size: 0.11,
    color: '#f59e0b',
    description: 'Massive 9-ton spent upper stage with lingering fuel and pressurized tanks. One of dozens of rocket bodies posing spontaneous explosion risks.',
    kesslerThreat: 'CRITICAL (High mass and potential for catastrophic fragmentation).'
  },
  {
    id: 'sat-iss',
    name: 'International Space Station (ISS)',
    type: 'active',
    category: 'Crewed Habitat',
    noradId: '25544',
    launchYear: 1998,
    country: 'International (NASA / ESA / JAXA / Roscosmos)',
    altitudeKm: 420,
    orbitRadius: 2.6,
    inclination: 51.6,
    speed: 0.015,
    size: 0.13,
    color: '#00f0ff',
    description: 'The largest modular space station in Low Earth Orbit. A continuously occupied microgravity laboratory requiring frequent collision-avoidance thruster burns.',
    kesslerThreat: 'Low (Active collision avoidance maneuvers regularly conducted).'
  },
  {
    id: 'deb-envisat',
    name: 'Envisat (Super-Debris)',
    type: 'debris',
    category: 'Derelict Heavycraft',
    noradId: '27386',
    launchYear: 2002,
    country: 'Europe (ESA)',
    altitudeKm: 785,
    orbitRadius: 3.12,
    inclination: 98.5,
    speed: 0.009,
    size: 0.12,
    color: '#f97316',
    description: 'An 8,200 kg inactive Earth observation satellite dubbed "one of the most dangerous orbital collision hazards". In orbit at high altitude for centuries.',
    kesslerThreat: 'CRITICAL (Massive target in densely populated polar orbit).'
  },
  {
    id: 'deb-fengyun1c',
    name: 'Fengyun-1C Shrapnel #1402',
    type: 'debris',
    category: 'Anti-Satellite Shrapnel',
    noradId: '25730',
    launchYear: 1999,
    country: 'China (Test Remnant)',
    altitudeKm: 865,
    orbitRadius: 3.3,
    inclination: 98.6,
    speed: 0.010,
    size: 0.06,
    color: '#ef4444',
    description: 'Result of the 2007 Chinese ASAT missile test, which obliterated the FY-1C satellite into the single largest cloud of debris in orbital history (over 3,500 tracked pieces).',
    kesslerThreat: 'Severe orbital-debris hazard.'
  },
  {
    id: 'deb-cosmos2251',
    name: 'Cosmos 2251 Shrapnel #482',
    type: 'debris',
    category: 'Collision Shrapnel',
    noradId: '34125',
    launchYear: 1993,
    country: 'Russia (Derelict Collision)',
    altitudeKm: 790,
    orbitRadius: 3.18,
    inclination: 74.0,
    speed: 0.013,
    size: 0.06,
    color: '#ef4444',
    description: 'Hypervelocity fragment from the catastrophic 2009 collision between active Iridium 33 and dead Cosmos 2251 at 42,000 km/h, proving Kessler syndrome is real.',
    kesslerThreat: 'HIGH (Hypervelocity kinetic projectile).'
  },

  // --- 2010s to 2026 MODERN EXPANSION ---
  {
    id: 'sat-gps',
    name: 'Navstar GPS IIF-12',
    type: 'active',
    category: 'Navigation',
    noradId: '41328',
    launchYear: 2016,
    country: 'United States (USSF)',
    altitudeKm: 20180,
    orbitRadius: 4.2,
    inclination: 55.0,
    speed: 0.006,
    size: 0.09,
    color: '#a78bfa',
    description: 'Medium Earth Orbit positioning satellite transmitting atomic-clock synchronized global navigation signals.',
    kesslerThreat: 'Low (Deep Medium Earth Orbit with lower debris concentration).'
  },
  {
    id: 'sat-starlink',
    name: 'Starlink-1138',
    type: 'active',
    category: 'Megaconstellation',
    noradId: '45178',
    launchYear: 2020,
    country: 'United States (SpaceX)',
    altitudeKm: 550,
    orbitRadius: 2.88,
    inclination: 53.0,
    speed: 0.014,
    size: 0.07,
    color: '#4ade80',
    description: 'Part of the commercial broadband megaconstellation numbering thousands of spacecraft in low Earth orbit. Autonomous collision avoidance maneuvers conducted thousands of times monthly.',
    kesslerThreat: 'Monitored (Massive density increases probability of close conjunctions).'
  },
  {
    id: 'sat-tiangong',
    name: 'Tiangong Space Station',
    type: 'active',
    category: 'Crewed Habitat',
    noradId: '48274',
    launchYear: 2021,
    country: 'China (CMSA)',
    altitudeKm: 390,
    orbitRadius: 2.55,
    inclination: 41.5,
    speed: 0.016,
    size: 0.11,
    color: '#22d3ee',
    description: 'Permanent crewed Chinese space station in low Earth orbit consisting of Tianhe, Wentian, and Mengtian modules.',
    kesslerThreat: 'Low (Equipped with thrusters for orbital maneuvers).'
  },
  {
    id: 'deb-cosmos1408',
    name: 'Cosmos 1408 ASAT Fragment',
    type: 'debris',
    category: 'ASAT Shrapnel',
    noradId: '13552',
    launchYear: 1982,
    country: 'Russia (ASAT Intercept)',
    altitudeKm: 485,
    orbitRadius: 2.7,
    inclination: 82.5,
    speed: 0.013,
    size: 0.07,
    color: '#ef4444',
    description: 'Shrapnel from the November 2021 Russian direct-ascent ASAT missile test that forced astronauts on the ISS to shelter in return capsules.',
    kesslerThreat: 'HIGH (Crosses ISS and Tiangong orbital flight paths).'
  },
  {
    id: 'deb-longmarch6a',
    name: 'Long March 6A Breakup Fragment',
    type: 'debris',
    category: 'Rocket Breakup Debris',
    noradId: '60388',
    launchYear: 2024,
    country: 'China (Rocket Stage)',
    altitudeKm: 810,
    orbitRadius: 3.2,
    inclination: 89.0,
    speed: 0.011,
    size: 0.06,
    color: '#ef4444',
    description: 'Upper stage exploded in August 2024 following deployment of the Qianfan megaconstellation, producing more than 700 trackable fragments.',
    kesslerThreat: 'CRITICAL (High altitude fragment cloud with centuries of persistence).'
  },
  {
    id: 'sat-future-megaconstellation',
    name: 'LEO Broadband Swarm 2026',
    type: 'active',
    category: 'Megaconstellation',
    noradId: 'not found',
    launchYear: 2026,
    country: 'Global Commercial',
    altitudeKm: 580,
    orbitRadius: 2.92,
    inclination: 64.0,
    speed: 0.014,
    size: 0.07,
    color: '#34d399',
    description: 'Modern 2026 generation of high-throughput orbital routers operating in an ultra-dense constellation shell.',
    kesslerThreat: 'Monitored (Near-continuous autonomous evasive routing).'
  }
];

/**
 * Historical milestones for each era from 1960 to 2026
 */
export const HISTORIC_TIMELINE_EVENTS = {
  1960: {
    title: '1960: Dawn of the Orbital Graveyard',
    description: 'Vanguard 1 and early boosters become the first permanent human artifacts left behind in Earth orbit.'
  },
  1961: {
    title: '1961: First Recorded In-Orbit Explosion',
    description: 'A Thor-Ablestar rocket stage breaks apart, scattering almost 300 pieces of shrapnel across orbit.'
  },
  1965: {
    title: '1965: Space Race Escalation',
    description: 'Gemini and Voskhod flights leave adapter equipment and spent upper stages in low Earth orbit.'
  },
  1970: {
    title: '1970: Cold War Orbital Accumulation',
    description: 'High launch cadences by the US and USSR leave scores of dead spy satellites and heavy boosters in polar orbit.'
  },
  1978: {
    title: '1978: Donald Kessler Publishes Hypothesis',
    description: 'NASA scientist Donald J. Kessler writes the landmark paper predicting that space debris collisions will cascade uncontrollably.'
  },
  1985: {
    title: '1985: Solwind ASAT Kinetic Missile Test',
    description: 'US Air Force F-15 fires an anti-satellite missile, destroying the Solwind satellite and showering LEO with shrapnel.'
  },
  1990: {
    title: '1990: Hubble Space Telescope Deployed',
    description: 'Hubble begins its mission at 535 km, operating directly in the rising low-Earth debris environment.'
  },
  1998: {
    title: '1998: ISS Assembly Begins',
    description: 'Zarya and Unity modules launch, creating humanity’s permanent outpost requiring regular collision avoidance.'
  },
  2002: {
    title: '2002: Envisat Heavy Earth Observatory',
    description: 'ESA launches the 8.2-ton Envisat. When communications fail in 2012, it becomes the most hazardous single derelict in orbit.'
  },
  2007: {
    title: '2007: Fengyun-1C Catastrophic ASAT Cloud',
    description: 'China destroys defunct weather satellite FY-1C in an ASAT test, creating over 3,500 trackable hypervelocity fragments.'
  },
  2009: {
    title: '2009: Iridium 33 & Cosmos 2251 Collision',
    description: 'Active Iridium satellite collides with derelict Russian Cosmos at 42,000 km/h, proving the Kessler cascade in real life.'
  },
  2016: {
    title: '2016: Precision Navigation Epoch',
    description: 'Modern GPS IIF and Galileo navigation constellations operational in Medium Earth Orbit.'
  },
  2019: {
    title: '2019: Mission Shakti ASAT Intercept',
    description: 'India destroys a test satellite in low orbit, generating hundreds of short-lived fragments.'
  },
  2020: {
    title: '2020: Megaconstellation Era Begins',
    description: 'SpaceX Starlink and OneWeb begin deploying thousands of mass-produced satellites, multiplying active objects in LEO.'
  },
  2021: {
    title: '2021: Cosmos 1408 Destruction & Tiangong',
    description: 'Russian ASAT test shatters Cosmos 1408; ISS crew shelters in Soyuz/Dragon. Tiangong modular station active.'
  },
  2024: {
    title: '2024: Long March 6A Stage Breakup',
    description: 'Rocket stage explodes at 800 km altitude following Qianfan deployment, adding 700+ high-altitude debris shards.'
  },
  2026: {
    title: '2026: Present Day — The Kessler Precipice',
    description: 'Over 10,000 active satellites and millions of debris fragments create an ultra-dense graveyard shell around Earth.'
  }
};

/**
 * Returns the most relevant historical event for a given year between 1960 and 2026
 */
export function getTimelineEventForYear(year) {
  const years = Object.keys(HISTORIC_TIMELINE_EVENTS).map(Number).sort((a, b) => b - a);
  for (const y of years) {
    if (year >= y) {
      return HISTORIC_TIMELINE_EVENTS[y];
    }
  }
  return HISTORIC_TIMELINE_EVENTS[1960];
}

/**
 * Generates ~600 realistic procedural orbital debris particles with calibrated launch years (1960 to 2026).
 * Debris counts surge during historical breakup events (1961, 1985, 2007, 2009, 2021, 2024).
 */
export function generateProceduralDebrisSwarm(count = 550) {
  const swarm = [];

  // Deterministic pseudo-random helper
  let seed = 42;
  function random() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  for (let i = 0; i < count; i++) {
    const roll = random();
    let year;

    // Distribute according to real-world accumulation curve:
    // 1960-1980: 8%
    // 1981-2000: 17%
    // 2001-2010 (FY-1C & Cosmos collisions): 35%
    // 2011-2026 (Modern surge): 40%
    if (roll < 0.08) {
      year = Math.floor(1960 + random() * 21); // 1960 - 1980
    } else if (roll < 0.25) {
      year = Math.floor(1981 + random() * 20); // 1981 - 2000
    } else if (roll < 0.60) {
      // Clustered around 2007 (FY-1C) and 2009 (Iridium-Cosmos)
      year = random() < 0.5 ? 2007 : 2009;
    } else {
      year = Math.floor(2010 + random() * 17); // 2010 - 2026
    }

    // Altitude clusters: LEO (2.4 to 3.4 units) and few GEO (4.5 units)
    let orbitRadius;
    if (random() < 0.88) {
      orbitRadius = 2.45 + random() * 0.95; // LEO
    } else {
      orbitRadius = 3.6 + random() * 1.0;  // MEO / GEO
    }

    const inclination = random() * 180; // random orbital inclination
    const node = random() * 360;        // longitude of ascending node
    const speed = 0.008 + random() * 0.009;
    const initialTheta = random() * Math.PI * 2;

    swarm.push({
      id: `proc-deb-${i}`,
      launchYear: year,
      orbitRadius,
      inclination,
      node,
      speed,
      initialTheta,
      size: 0.025 + random() * 0.035,
      isExplosionEvent: year === 2007 || year === 2009 || year === 2021 || year === 2024,
    });
  }

  return swarm;
}

(() => {
  'use strict';

  const app = document.getElementById('research-app');
  if (!app) return;

  // The catalogue is deliberately a set of destinations, not a publication list.
  const bodies = {
    mercury: { name: 'Mercury', type: 'Terrestrial planet', size: 22 },
    venus: { name: 'Venus', type: 'Terrestrial planet', size: 29 },
    earth: { name: 'Earth', type: 'Terrestrial planet', size: 32, children: ['earth-world', 'moon'] },
    'earth-world': { name: 'Earth', type: 'Terrestrial planet', size: 76 },
    moon: { name: 'Moon', type: 'Earth’s satellite', size: 28 },
    mars: { name: 'Mars', type: 'Terrestrial planet', size: 27, children: ['mars-world', 'phobos', 'deimos'] },
    'mars-world': { name: 'Mars', type: 'Terrestrial planet', size: 72 },
    phobos: { name: 'Phobos', type: 'Martian moon', size: 22 },
    deimos: { name: 'Deimos', type: 'Martian moon', size: 18 },
    jupiter: { name: 'Jupiter', type: 'Gas giant', size: 58, children: ['jupiter-world', 'io', 'europa', 'ganymede', 'callisto'] },
    'jupiter-world': { name: 'Jupiter', type: 'Gas giant', size: 100 },
    io: { name: 'Io', type: 'Galilean moon', size: 27 },
    europa: { name: 'Europa', type: 'Galilean moon', size: 25 },
    ganymede: { name: 'Ganymede', type: 'Galilean moon', size: 33 },
    callisto: { name: 'Callisto', type: 'Galilean moon', size: 30 },
    saturn: { name: 'Saturn', type: 'Gas giant', size: 50, children: ['saturn-world', 'titan', 'enceladus', 'rhea', 'dione', 'tethys', 'mimas'] },
    'saturn-world': { name: 'Saturn', type: 'Gas giant', size: 92 },
    titan: { name: 'Titan', type: 'Saturnian moon', size: 31 },
    enceladus: { name: 'Enceladus', type: 'Saturnian moon', size: 22 },
    rhea: { name: 'Rhea', type: 'Saturnian moon', size: 23 },
    dione: { name: 'Dione', type: 'Saturnian moon', size: 21 },
    tethys: { name: 'Tethys', type: 'Saturnian moon', size: 20 },
    mimas: { name: 'Mimas', type: 'Saturnian moon', size: 18 },
    'ice-giants': { name: 'Uranus & Neptune', type: 'Ice giants', size: 35, children: ['uranus', 'neptune'] },
    uranus: { name: 'Uranus', type: 'Ice giant', size: 62 },
    neptune: { name: 'Neptune', type: 'Ice giant', size: 60 },
    pluto: { name: 'Pluto', type: 'Dwarf planet', size: 21 },
    exoplanets: { name: 'Exoplanets', type: 'Beyond the Solar System', size: 34 }
  };
  const overview = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'ice-giants', 'pluto', 'exoplanets'];
  const overviewPositions = [[12, 59], [21, 37], [31, 65], [40, 33], [51, 61], [63, 34], [75, 64], [85, 38], [92, 73]];
  const systemPositions = {
    2: [[38, 49], [70, 40]],
    3: [[43, 49], [72, 29], [70, 69]],
    5: [[47, 50], [20, 27], [76, 25], [78, 72], [21, 74]],
    7: [[47, 50], [15, 26], [41, 18], [75, 25], [82, 60], [59, 79], [20, 72]]
  };
  let trail = [];

  function displayPlanet(id) {
    return id.replace(/-world$/, '').replace('ice-giants', 'uranus');
  }

  function bodyButton(id, position, index) {
    const body = bodies[id];
    return `<button class="research-body" type="button" data-research-target="${id}" style="--x:${position[0]}%;--y:${position[1]}%;--size:${body.size}px" aria-label="Explore ${body.name}">
      <span class="research-planet research-planet--${displayPlanet(id)}" aria-hidden="true"></span>
      <span class="research-body-label"><span class="research-body-number">${String(index + 1).padStart(2, '0')}</span>${body.name}</span>
    </button>`;
  }

  function render(moveFocus = false) {
    const currentId = trail[trail.length - 1];
    const current = currentId && bodies[currentId];
    const isOverview = !current;
    const isSystem = current && current.children;
    const items = isOverview ? overview : isSystem ? current.children : [];
    const positions = isOverview ? overviewPositions : isSystem ? systemPositions[items.length] : [];
    const sceneClass = isOverview ? 'overview' : isSystem ? 'system' : 'detail';
    const title = isOverview ? 'Solar System' : current.name;
    const crumbs = ['Solar System', ...trail.map(id => bodies[id].name)];
    const objects = isOverview || isSystem
      ? items.map((id, i) => bodyButton(id, positions[i], i)).join('')
      : `<div class="research-detail-planet research-planet research-planet--${displayPlanet(currentId)}" aria-hidden="true"></div>`;

    app.innerHTML = `<div class="research-console">
      <div class="research-console-top">
        <div class="research-breadcrumb" aria-label="Current location">${crumbs.map((part, i) => `<span${i === crumbs.length - 1 ? ' aria-current="page"' : ''}>${part}</span>`).join('<span class="research-breadcrumb-separator" aria-hidden="true">/</span>')}</div>
        ${isOverview ? '' : '<button class="research-back" type="button" data-research-back aria-label="Go back one level">← <span>Back</span></button>'}
      </div>
      <div class="research-layout">
        <div class="research-scene research-scene--${sceneClass}" aria-label="${title} interactive map">
          <div class="research-orbits" aria-hidden="true"><span class="research-orbit"></span><span class="research-orbit"></span><span class="research-orbit"></span></div>
          ${isOverview ? '<div class="research-sun" aria-hidden="true"></div>' : ''}
          ${objects}
        </div>
        <div class="research-panel" aria-live="polite">
          <h3 class="research-panel-title" tabindex="-1">${title}</h3>
          ${isOverview || isSystem ? '' : '<p class="research-status">To be done…</p>'}
        </div>
      </div>
    </div>
    ${isOverview || isSystem ? '<div class="research-scene-caption">SELECT A DESTINATION</div>' : ''}`;
    if (moveFocus) app.querySelector('.research-panel-title').focus({ preventScroll: true });
  }

  app.addEventListener('click', (event) => {
    const target = event.target.closest('[data-research-target]');
    if (target && app.contains(target)) {
      const id = target.dataset.researchTarget;
      if (!bodies[id]) return;
      trail.push(id);
      render(true);
      return;
    }
    if (event.target.closest('[data-research-back]') && trail.length) {
      trail.pop();
      render(true);
    }
  });
  app.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && trail.length) {
      trail.pop();
      render(true);
    }
  });
  render();
})();

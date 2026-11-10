(() => {
  'use strict';

  const app = document.getElementById('research-app');
  if (!app) return;

  // The catalogue is deliberately a set of destinations, not a publication list.
  const bodies = {
    mercury: { name: 'Mercury', type: 'Terrestrial planet', size: 22 },
    venus: { name: 'Venus', type: 'Terrestrial planet', size: 29 },
    earth: { name: 'Earth–Moon System', type: 'Terrestrial planet', size: 32, children: ['earth-world', 'moon'] },
    'earth-world': { name: 'Earth', type: 'Terrestrial planet', size: 76 },
    moon: { name: 'Moon', type: 'Earth’s satellite', size: 28 },
    mars: { name: 'Mars System', type: 'Terrestrial planet', size: 27, children: ['mars-world', 'phobos', 'deimos'] },
    'mars-world': { name: 'Mars', type: 'Terrestrial planet', size: 72 },
    phobos: { name: 'Phobos', type: 'Martian moon', size: 22 },
    deimos: { name: 'Deimos', type: 'Martian moon', size: 18 },
    jupiter: { name: 'Jupiter System', type: 'Gas giant', size: 58, children: ['jupiter-world', 'io', 'europa', 'ganymede', 'callisto'] },
    'jupiter-world': { name: 'Jupiter', type: 'Gas giant', size: 100 },
    io: { name: 'Io', type: 'Galilean moon', size: 27 },
    europa: { name: 'Europa', type: 'Galilean moon', size: 25 },
    ganymede: { name: 'Ganymede', type: 'Galilean moon', size: 33 },
    callisto: { name: 'Callisto', type: 'Galilean moon', size: 30 },
    saturn: { name: 'Saturn System', type: 'Gas giant', size: 50, children: ['saturn-world', 'titan', 'enceladus', 'rhea', 'dione', 'tethys', 'mimas'] },
    'saturn-world': { name: 'Saturn', type: 'Gas giant', size: 92 },
    titan: { name: 'Titan', type: 'Saturnian moon', size: 31 },
    enceladus: { name: 'Enceladus', type: 'Saturnian moon', size: 22 },
    rhea: { name: 'Rhea', type: 'Saturnian moon', size: 23 },
    dione: { name: 'Dione', type: 'Saturnian moon', size: 21 },
    tethys: { name: 'Tethys', type: 'Saturnian moon', size: 20 },
    mimas: { name: 'Mimas', type: 'Saturnian moon', size: 18 },
    uranus: { name: 'Uranus', type: 'Ice giant', size: 35 },
    neptune: { name: 'Neptune System', type: 'Ice giant', size: 35, children: ['neptune-world', 'triton', 'nereid'] },
    'neptune-world': { name: 'Neptune', type: 'Ice giant', size: 70 },
    triton: { name: 'Triton', type: 'Neptune’s moon', size: 28 },
    nereid: { name: 'Nereid', type: 'Neptune’s moon', size: 22 },
    pluto: { name: 'Pluto', type: 'Dwarf planet', size: 21 },
    outside: { name: 'Outside Solar System', type: 'Beyond the Solar System', size: 0 }
  };
  const overview = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'outside'];
  const overviewPositions = [[12, 60], [21, 34], [30, 65], [39, 30], [48, 61], [58, 32], [68, 66], [77, 32], [84, 60], [86, 11]];
  const overviewMobilePositions = [[27, 12], [73, 12], [27, 31], [73, 31], [27, 50], [73, 50], [27, 69], [73, 69], [27, 88], [73, 88]];
  const systemPositions = {
    2: [[38, 49], [70, 40]],
    3: [[43, 49], [72, 29], [70, 69]],
    5: [[47, 50], [20, 27], [76, 25], [78, 72], [21, 74]],
    7: [[47, 50], [15, 26], [41, 18], [75, 25], [82, 60], [59, 79], [20, 72]]
  };
  let trail = [];

  function displayPlanet(id) {
    return id.replace(/-world$/, '');
  }

  function bodyButton(id, position, index, mobilePosition) {
    const body = bodies[id];
    if (id === 'outside') return `<button class="research-body research-body--outside" type="button" data-research-target="outside" style="--x:${position[0]}%;--y:${position[1]}%;--mobile-x:${mobilePosition[0]}%;--mobile-y:${mobilePosition[1]}%" aria-label="Explore Outside Solar System"><span class="research-outside-label">Outside Solar System <span aria-hidden="true">↗</span></span></button>`;
    return `<button class="research-body" type="button" data-research-target="${id}" style="--x:${position[0]}%;--y:${position[1]}%;--size:${body.size}px;${mobilePosition ? `--mobile-x:${mobilePosition[0]}%;--mobile-y:${mobilePosition[1]}%;` : ''}" aria-label="Explore ${body.name}">
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
    const isOutside = currentId === 'outside';
    const sceneClass = isOverview ? 'overview' : isSystem ? 'system' : 'detail';
    const title = isOverview ? 'Solar System' : current.name;
    const illustrativeBodies = new Set(['phobos', 'deimos', 'io', 'europa', 'ganymede', 'callisto', 'titan', 'rhea', 'dione', 'tethys', 'mimas', 'triton', 'nereid', 'uranus', 'pluto']);
    const imageNotes = {
      enceladus: 'Artist’s rendering · Cassini surface map',
      nereid: 'AI artist’s impression · surface features are imagined',
      titan: 'AI artist’s impression · illustrative atmosphere'
    };
    if (currentId && illustrativeBodies.has(currentId) && !imageNotes[currentId]) {
      imageNotes[currentId] = 'AI artist’s impression · illustrative details';
    }
    const crumbs = ['Solar System', ...trail.map(id => bodies[id].name)];
    const objects = isOverview || isSystem
      ? items.map((id, i) => bodyButton(id, positions[i], i, isOverview ? overviewMobilePositions[i] : null)).join('')
      : `<div class="research-detail-planet research-planet research-planet--${displayPlanet(currentId)}" aria-hidden="true"></div>`;

    app.innerHTML = `<div class="research-console-top">
        <div class="research-breadcrumb" aria-label="Current location">${crumbs.map((part, i) => `<span${i === crumbs.length - 1 ? ' aria-current="page"' : ''}>${part}</span>`).join('<span class="research-breadcrumb-separator" aria-hidden="true">/</span>')}</div>
        ${isOverview ? '' : '<button class="research-back" type="button" data-research-back aria-label="Go back one level">← <span>Back</span></button>'}
      </div>
    <div class="research-console">
      <div class="research-layout${isOutside ? ' research-layout--outside' : ''}">
        ${isOutside ? '' : `<div class="research-scene research-scene--${sceneClass}" aria-label="${title} interactive map">
          ${isOverview ? '<div class="research-orbits" aria-hidden="true"><span class="research-orbit"></span><span class="research-orbit"></span><span class="research-orbit"></span></div>' : ''}
          ${isOverview ? '<div class="research-sun" aria-hidden="true"></div>' : ''}
          ${objects}
        </div>`}
        <div class="research-panel" aria-live="polite">
          <h3 class="research-panel-title${isOutside ? ' research-visually-hidden' : ''}" tabindex="-1">${title}</h3>
          ${isOverview || isSystem ? '' : '<p class="research-status">To be done…</p>'}
          ${currentId && imageNotes[currentId] ? `<p class="research-image-note">${imageNotes[currentId]}</p>` : ''}
        </div>
      </div>
    </div>`;
    if (moveFocus) app.querySelector('.research-panel-title').focus({ preventScroll: true });
  }

  let transitioning = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function navigate(id, button) {
    if (transitioning || (id === null && !trail.length)) return;
    const scene = app.querySelector('.research-scene');
    if (button && scene) {
      const sceneRect = scene.getBoundingClientRect();
      const targetRect = button.getBoundingClientRect();
      scene.style.setProperty('--zoom-x', `${((targetRect.left + targetRect.width / 2 - sceneRect.left) / sceneRect.width) * 100}%`);
      scene.style.setProperty('--zoom-y', `${((targetRect.top + targetRect.height / 2 - sceneRect.top) / sceneRect.height) * 100}%`);
    }
    const update = () => {
      if (id === null) trail.pop(); else trail.push(id);
      app.classList.remove('research-transition-out', 'research-transition-back');
      render(true);
      if (reducedMotion.matches) { transitioning = false; return; }
      app.classList.add('research-transition-in');
      window.setTimeout(() => {
        app.classList.remove('research-transition-in');
        transitioning = false;
      }, 400);
    };
    if (reducedMotion.matches) { update(); return; }
    transitioning = true;
    app.classList.add('research-transition-out');
    if (id === null) app.classList.add('research-transition-back');
    window.setTimeout(update, 280);
  }

  app.addEventListener('click', (event) => {
    const target = event.target.closest('[data-research-target]');
    if (target && app.contains(target) && bodies[target.dataset.researchTarget]) {
      navigate(target.dataset.researchTarget, target);
      return;
    }
    if (event.target.closest('[data-research-back]')) navigate(null);
  });
  app.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') navigate(null);
  });
  render();
})();

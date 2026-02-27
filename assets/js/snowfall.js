(function () {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  const canvas = document.getElementById('snow-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let pointer = { x: -9999, y: -9999, active: false };
  const flakes = [];
  const FLAKE_COUNT = 140;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createFlake() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.8 + 1,
      speedY: Math.random() * 1.2 + 0.6,
      driftX: Math.random() * 0.8 - 0.4,
      alpha: Math.random() * 0.45 + 0.45,
      swing: Math.random() * Math.PI * 2,
      swingSpeed: Math.random() * 0.02 + 0.008
    };
  }

  function resetFlake(flake, topOnly) {
    flake.x = Math.random() * width;
    flake.y = topOnly ? -10 : Math.random() * height;
    flake.speedY = Math.random() * 1.2 + 0.6;
    flake.driftX = Math.random() * 0.8 - 0.4;
    flake.alpha = Math.random() * 0.45 + 0.45;
    flake.radius = Math.random() * 2.8 + 1;
  }

  function init() {
    resize();
    flakes.length = 0;
    for (let i = 0; i < FLAKE_COUNT; i++) flakes.push(createFlake());
    requestAnimationFrame(animate);
  }

  function applyPointerEffect(flake) {
    if (!pointer.active) return;
    const dx = flake.x - pointer.x;
    const dy = flake.y - pointer.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const range = 120;
    if (dist > 0 && dist < range) {
      const force = (range - dist) / range;
      flake.x += (dx / dist) * force * 2.2;
      flake.y += (dy / dist) * force * 1.2;
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (const flake of flakes) {
      flake.swing += flake.swingSpeed;
      flake.x += flake.driftX + Math.sin(flake.swing) * 0.35;
      flake.y += flake.speedY;
      applyPointerEffect(flake);

      if (flake.y > height + 10 || flake.x < -15 || flake.x > width + 15) {
        resetFlake(flake, true);
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });
  window.addEventListener('mouseleave', () => {
    pointer.active = false;
  });

  init();
})();

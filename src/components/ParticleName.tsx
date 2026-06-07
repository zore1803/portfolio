import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  highlight: string;
  halo: number;
};

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const ParticleName = ({ text = 'ROHIT ZORE' }: { text?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    const buildParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const offscreen = document.createElement('canvas');
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      offscreen.width = width;
      offscreen.height = height;
      offCtx.clearRect(0, 0, width, height);

      let fontSize = Math.min(width / 6.45, height * 0.62);
      offCtx.font = `900 ${fontSize}px Outfit, Arial, sans-serif`;
      while (offCtx.measureText(text).width > width * 0.88 && fontSize > 24) {
        fontSize -= 2;
        offCtx.font = `900 ${fontSize}px Outfit, Arial, sans-serif`;
      }
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillStyle = '#ffffff';
      offCtx.fillText(text, width / 2, height / 2);

      const image = offCtx.getImageData(0, 0, width, height);
      const gap = 3;
      const targets: Array<{ x: number; y: number }> = [];

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const alpha = image.data[(y * width + x) * 4 + 3];
          if (alpha > 120) targets.push({ x, y });
        }
      }

      const maxParticles = width < 520 ? 1500 : 2300;
      targets.sort(() => Math.random() - 0.5);
      const selected = targets.slice(0, maxParticles);

      particlesRef.current = selected.map((target, index) => {
        const t = selected.length <= 1 ? 0 : index / (selected.length - 1);
        const angle = randomBetween(0, Math.PI * 2);
        const distanceX = randomBetween(width < 520 ? 8 : 12, width < 520 ? 32 : 46);
        const distanceY = randomBetween(width < 520 ? 5 : 8, width < 520 ? 18 : 28);
        const x = target.x + Math.cos(angle) * distanceX;
        const y = target.y + Math.sin(angle) * distanceY;

        const green = Math.round(240 - t * 138);
        return {
          x,
          y,
          tx: target.x,
          ty: target.y,
          vx: 0,
          vy: 0,
          size: randomBetween(0.75, 1.35),
          color: `rgb(0, ${green}, 255)`,
          alpha: randomBetween(0.78, 1),
          highlight: t > 0.56 ? 'rgba(157, 210, 255, 0.95)' : 'rgba(178, 255, 252, 0.95)',
          halo: randomBetween(1.65, 2.25),
        };
      });
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.rect(0, 0, width, height);
      ctx.clip();

      for (const particle of particlesRef.current) {
        const dx = particle.tx - particle.x;
        const dy = particle.ty - particle.y;

        particle.vx += dx * 0.026;
        particle.vy += dy * 0.026;

        if (mouseRef.current.active) {
          const mx = particle.x - mouseRef.current.x;
          const my = particle.y - mouseRef.current.y;
          const dist = Math.hypot(mx, my);
          const radius = width < 520 ? 34 : 42;

          if (dist > 0 && dist < radius) {
            const force = (1 - dist / radius) * 2.8;
            particle.vx += (mx / dist) * force;
            particle.vy += (my / dist) * force;
          }
        }

        particle.vx *= 0.8;
        particle.vy *= 0.8;
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.globalAlpha = particle.alpha * 0.14;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * particle.halo, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 1.5;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = particle.alpha * 0.55;
        ctx.fillStyle = particle.highlight;
        ctx.beginPath();
        ctx.arc(
          particle.x - particle.size * 0.28,
          particle.y - particle.size * 0.32,
          Math.max(0.35, particle.size * 0.32),
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.restore();
      frameRef.current = requestAnimationFrame(animate);
    };

    const updateMouse = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const clearMouse = () => {
      mouseRef.current.active = false;
    };

    buildParticles();
    frameRef.current = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(buildParticles);
    resizeObserver.observe(canvas);
    canvas.addEventListener('pointermove', updateMouse);
    canvas.addEventListener('pointerleave', clearMouse);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointermove', updateMouse);
      canvas.removeEventListener('pointerleave', clearMouse);
    };
  }, [text]);

  return (
    <div className="hero-particle-title" aria-label={text}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <h1 className="sr-only">{text}</h1>
    </div>
  );
};

export default ParticleName;

import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  hx: number;
  hy: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
};

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;
const DARK_COLORS = ['#00f5ff', '#00e5cc', '#3d8eff', '#60efff', '#aac7ff', '#e0eaff'];
const LIGHT_COLORS = ['#0d2d6e', '#1e40af', '#0e7490', '#1a5276', '#155e75', '#334155'];
const MOUSE_RADIUS = 90;
const SPRING = 0.045;
const DAMPING = 0.82;
const applyLetterSpacing = (ctx: CanvasRenderingContext2D, spacing: number) => {
  (ctx as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing = `${spacing}px`;
};
const measureSpacedText = (ctx: CanvasRenderingContext2D, value: string, spacing: number) =>
  value.split('').reduce((total, char, index) => total + ctx.measureText(char).width + (index ? spacing : 0), 0);
const drawSpacedText = (ctx: CanvasRenderingContext2D, value: string, x: number, y: number, spacing: number) => {
  let cursor = x - measureSpacedText(ctx, value, spacing) / 2;

  for (const char of value) {
    ctx.fillText(char, cursor, y);
    cursor += ctx.measureText(char).width + spacing;
  }
};

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

      const letterSpacing = width < 520 ? 2 : 5;
      let fontSize = Math.min(width / 5.85, height * 0.76);
      offCtx.font = `900 ${fontSize}px Inter, Segoe UI, Outfit, Arial, sans-serif`;
      applyLetterSpacing(offCtx, letterSpacing);
      while (measureSpacedText(offCtx, text, letterSpacing) > width * 0.9 && fontSize > 24) {
        fontSize -= 2;
        offCtx.font = `900 ${fontSize}px Inter, Segoe UI, Outfit, Arial, sans-serif`;
        applyLetterSpacing(offCtx, letterSpacing);
      }
      offCtx.textAlign = 'left';
      offCtx.textBaseline = 'middle';
      offCtx.fillStyle = '#ffffff';
      drawSpacedText(offCtx, text, width / 2, height / 2, letterSpacing);

      const image = offCtx.getImageData(0, 0, width, height);
      const gap = width < 520 ? 3 : 2;
      const targets: Array<{ x: number; y: number }> = [];

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const alpha = image.data[(y * width + x) * 4 + 3];
          if (alpha > 100) targets.push({ x, y });
        }
      }

      const maxParticles = width < 520 ? 1700 : 2800;
      targets.sort(() => Math.random() - 0.5);
      const selected = targets.slice(0, maxParticles);
      const isLight = document.documentElement.classList.contains('light');
      const palette = isLight ? LIGHT_COLORS : DARK_COLORS;

      particlesRef.current = selected.map((target, index) => {
        const angle = randomBetween(0, Math.PI * 2);
        const distanceX = randomBetween(width < 520 ? 14 : 20, width < 520 ? 54 : 84);
        const distanceY = randomBetween(width < 520 ? 8 : 12, width < 520 ? 28 : 46);
        const x = target.x + Math.cos(angle) * distanceX;
        const y = target.y + Math.sin(angle) * distanceY;

        return {
          x,
          y,
          hx: target.x,
          hy: target.y,
          vx: 0,
          vy: 0,
          size: randomBetween(width < 520 ? 0.9 : 1.1, width < 520 ? 1.9 : 2.8),
          color: palette[index % palette.length],
          alpha: randomBetween(0.82, 1),
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

      const isLight = document.documentElement.classList.contains('light');

      for (const particle of particlesRef.current) {
        const dx = particle.hx - particle.x;
        const dy = particle.hy - particle.y;

        particle.vx += dx * SPRING;
        particle.vy += dy * SPRING;

        if (mouseRef.current.active) {
          const mx = particle.x - mouseRef.current.x;
          const my = particle.y - mouseRef.current.y;
          const dist = Math.hypot(mx, my);

          if (dist > 0 && dist < MOUSE_RADIUS) {
            const force = 7000 / (dist * dist + 200);
            particle.vx += (mx / dist) * force;
            particle.vy += (my / dist) * force;
          }
        }

        particle.vx *= DAMPING;
        particle.vy *= DAMPING;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const displacement = Math.min(1, Math.hypot(particle.x - particle.hx, particle.y - particle.hy) / 72);
        const bloom = isLight ? 0 : displacement;

        if (!isLight) {
          ctx.globalAlpha = particle.alpha * (0.03 + bloom * 0.2);
          ctx.fillStyle = particle.color;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 4 + bloom * 14;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * (4 + bloom * 3), 0, Math.PI * 2);
          ctx.fill();

          ctx.globalAlpha = particle.alpha * (0.08 + bloom * 0.3);
          ctx.shadowBlur = 2 + bloom * 9;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * (2 + bloom * 1.5), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = isLight ? 0 : 1.5 + bloom * 5;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
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

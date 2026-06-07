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

      let fontSize = Math.min(width / 6.6, height * 0.58);
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
      const gap = width < 520 ? 4 : 5;
      const targets: Array<{ x: number; y: number }> = [];

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const alpha = image.data[(y * width + x) * 4 + 3];
          if (alpha > 120) targets.push({ x, y });
        }
      }

      const maxParticles = width < 520 ? 1150 : 1550;
      targets.sort(() => Math.random() - 0.5);
      const selected = targets.slice(0, maxParticles);

      particlesRef.current = selected.map((target, index) => {
        const t = selected.length <= 1 ? 0 : index / (selected.length - 1);
        const startSide = Math.floor(Math.random() * 4);
        let x = randomBetween(0, width);
        let y = randomBetween(0, height);

        if (startSide === 0) y = randomBetween(-height, -20);
        if (startSide === 1) x = randomBetween(width + 20, width * 2);
        if (startSide === 2) y = randomBetween(height + 20, height * 2);
        if (startSide === 3) x = randomBetween(-width, -20);

        const green = Math.round(240 - t * 138);
        return {
          x,
          y,
          tx: target.x,
          ty: target.y,
          vx: 0,
          vy: 0,
          size: randomBetween(1.7, 2.7),
          color: `rgb(0, ${green}, 255)`,
        };
      });
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(0, 240, 255, 0.18)');
      gradient.addColorStop(1, 'rgba(0, 102, 255, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const particle of particlesRef.current) {
        const dx = particle.tx - particle.x;
        const dy = particle.ty - particle.y;

        particle.vx += dx * 0.018;
        particle.vy += dy * 0.018;

        if (mouseRef.current.active) {
          const mx = particle.x - mouseRef.current.x;
          const my = particle.y - mouseRef.current.y;
          const dist = Math.hypot(mx, my);
          const radius = 100;

          if (dist > 0 && dist < radius) {
            const force = (1 - dist / radius) * 8.5;
            particle.vx += (mx / dist) * force;
            particle.vy += (my / dist) * force;
          }
        }

        particle.vx *= 0.84;
        particle.vy *= 0.84;
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 8;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
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

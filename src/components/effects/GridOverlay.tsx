'use client';

export default function GridOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[200%] h-[200%] -left-[50%] -top-[50%] animate-grid-move"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)
          `,
          transform: 'perspective(1000px) rotateX(60deg) translateY(0) translateZ(-200px)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        }}
      />
    </div>
  );
}

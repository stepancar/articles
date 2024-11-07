export function drawClockArrows(ctx, radius, color, currentTime, center) {
    const angle = Math.PI / 2 - (2 * Math.PI * currentTime) / 1000 / 60;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(
        center.x + radius * Math.cos(angle),
        center.y - radius * Math.sin(angle)
    );
    ctx.lineWidth = 7;
    ctx.strokeStyle = color;
    ctx.stroke();
}

export function drawClockFace(ctx, radius, color, center) {
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

export function drawSpider(ctx, centerX, centerY, animationProgress, scale) {
    // Body
   ctx.fillStyle = 'black';
   ctx.beginPath();
   ctx.arc(centerX, centerY, 50 * scale, 0, Math.PI * 2); // Large body circle scaled by `scale`
   ctx.fill();

   // Head
   ctx.beginPath();
   ctx.arc(centerX, centerY - 70 * scale, 25 * scale, 0, Math.PI * 2); // Head, scaled by `scale`
   ctx.fill();

   // Legs with animated movement and scale
   const legPositions = [
      [-50, -60, -120, -120], [50, -60, 120, -120],
      [-60, -30, -140, -40], [60, -30, 140, -40],
      [-70, 0, -140, 50], [70, 0, 140, 50],
      [-50, 20, -100, 110], [50, 20, 100, 110]
   ];

   ctx.beginPath();
   legPositions.forEach(([dx1, dy1, dx2, dy2], index) => {
      // Calculate leg movement offset with scale
      const legSwing = Math.sin(animationProgress * Math.PI * 2 + index) * 10 * scale;

      // Apply offset and scale to each leg's endpoint for animation effect
      ctx.moveTo(centerX + dx1 * scale, centerY + dy1 * scale);
      ctx.lineTo(centerX + (dx2 + legSwing) * scale, centerY + (dy2 + legSwing) * scale);
   });
   ctx.lineWidth = 4 * scale; // Scale the line width as well for consistent appearance
   ctx.stroke();
}

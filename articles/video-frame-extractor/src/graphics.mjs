

export function drawClockArrows(ctx, radius, color, currentTime, center) {
    const angle = Math.PI / 2 - 2 * Math.PI * currentTime / 1000 / 60;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(center.x + radius * Math.cos(angle), center.y - radius * Math.sin(angle));
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
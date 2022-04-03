export var canvas2Cartesian = function canvas2Cartesian(v, center) {
  "worklet";
  return { x: v.x - center.x, y: -1 * (v.y - center.y) };
};
export var cartesian2Canvas = function cartesian2Canvas(v, center) {
  "worklet";
  return { x: v.x + center.x, y: -1 * v.y + center.y };
};
export var cartesian2Polar = function cartesian2Polar(v) {
  "worklet";
  return {
    theta: Math.atan2(v.y, v.x),
    radius: Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2)),
  };
};
export var polar2Cartesian = function polar2Cartesian(p) {
  "worklet";
  return { x: p.radius * Math.cos(p.theta), y: p.radius * Math.sin(p.theta) };
};
export var polar2Canvas = function polar2Canvas(p, center) {
  "worklet";
  return cartesian2Canvas(polar2Cartesian(p), center);
};
export var canvas2Polar = function canvas2Polar(v, center) {
  "worklet";
  return cartesian2Polar(canvas2Cartesian(v, center));
};
//# sourceMappingURL=Coordinates.js.map

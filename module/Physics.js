export var snapPoint = function snapPoint(value, velocity, points) {
  "worklet";
  var point = value + 0.2 * velocity;
  var deltas = points.map(function (p) {
    return Math.abs(point - p);
  });
  var minDelta = Math.min.apply(null, deltas);
  return points.filter(function (p) {
    return Math.abs(point - p) === minDelta;
  })[0];
};
//# sourceMappingURL=Physics.js.map

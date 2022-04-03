import _ from "lodash";
export const clamp = (value, lowerBound, upperBound) => {
  "worklet";
  return Math.min(Math.max(lowerBound, value), upperBound);
};
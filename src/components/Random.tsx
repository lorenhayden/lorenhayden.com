export type Range = {
  min: number,
  max: number
}

export const FloatRange = (range: Range): number => {
  if (isNaN(range.min) || isNaN(range.max)) {
    throw new Error("Both minimum and maximum range values must be valid numbers.")
  }
  return Math.floor(Math.random() * (range.max - range.min)) + range.min;
}


export const IntRange = (range: Range): number => {
  return ~~FloatRange(range);
}

export const Vector3Range = (xr: Range, yr: Range, zr: Range): [number, number, number] => {
  const x = FloatRange(xr);
  const y = FloatRange(yr);
  const z = FloatRange(zr);
  return [x, y, z];
}

export const RGBRange = ():[number, number, number] => {
  const colorRange: Range = {
    min: 1,
    max: 255
  }
  const r = IntRange(colorRange);
  const g = IntRange(colorRange);
  const b = IntRange(colorRange);
  return [r, g, b];
}

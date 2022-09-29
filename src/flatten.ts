import { NestedArray } from "../types/nestedArray";

export function flatten(
  nestedArray: NestedArray<number>,
  res: number[] = []
): number[] {
  return nestedArray.reduce((x: number[], current) => {
    if (Array.isArray(current)) return flatten(current, res);
    res.push(current);
    return res;
  }, []);
}

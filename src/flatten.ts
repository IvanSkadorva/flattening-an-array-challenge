export function flatten(arr: number[][]): number[] {
  return ([] as number[]).concat(...arr);
}

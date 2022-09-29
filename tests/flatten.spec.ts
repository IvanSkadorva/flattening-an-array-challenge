import { flatten } from "../src/flatten";

describe("Flatten", () => {
  it("should flatten an array ", () => {
    expect(flatten([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
  });
});

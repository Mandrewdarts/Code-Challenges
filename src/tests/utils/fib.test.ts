import { fib } from "../../utils/fib";

describe("fib", () => {
  test("it works", () => {
    expect(fib(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  test("it works with params", () => {
    expect(fib(10, 2, 3)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 34]);
  });
});

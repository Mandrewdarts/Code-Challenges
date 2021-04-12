import { fizzbuzzFib } from "../../utils/fizzbuzz-fib";

describe("combined", () => {
  test("it works", () => {
    expect(fizzbuzzFib(6)).toEqual(["fizzbuzz", 1, 1, 2, "fizz", "buzz", 8]);
  });

  test("it works with params", () => {
    expect(fizzbuzzFib(6)).toEqual(["fizzbuzz", 1, 1, 2, "fizz", "buzz", 8]);
  });
});

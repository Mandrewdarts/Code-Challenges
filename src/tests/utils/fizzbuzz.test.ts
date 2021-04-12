import { fizzbuzz } from "../../utils/fizzbuzz";

describe("fizzbuzz", () => {
  test("it works", () => {
    expect(fizzbuzz(3)).toEqual([1, 2, "fizz"]);
    expect(fizzbuzz(15)).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ]);

    expect(fizzbuzz(5, [2, "yep"], [4, "nope"])).toEqual([
      1,
      "yep",
      3,
      "yepnope",
      5,
    ]);
  });
});

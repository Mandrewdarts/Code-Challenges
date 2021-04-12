import { fib } from "./fib";
import { getSingleFizzBuzz } from "./fizzbuzz";

export function fizzbuzzFib(
  input = 6,
  y = 1,
  z = 2,
  divisor1: [number, string] = [3, "fizz"],
  divisor2: [number, string] = [5, "buzz"]
) {
  return fib(input, y, z).map((num) =>
    getSingleFizzBuzz(num, divisor1, divisor2)
  );
}

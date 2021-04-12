export function fizzbuzz(
  input = 1,
  divisor1: [number, string] = [3, "fizz"],
  divisor2: [number, string] = [5, "buzz"]
) {
  const result = [];

  for (let index = 1; index <= input; index++) {
    result.push(getSingleFizzBuzz(index, divisor1, divisor2));
  }
  return result;
}

export function getSingleFizzBuzz(
  input = 1,
  divisor1: [number, string] = [3, "fizz"],
  divisor2: [number, string] = [5, "buzz"]
) {
  const [divisor1Number, divisor1Text] = divisor1;
  const [divisor2Number, divisor2Text] = divisor2;
  if (input % divisor1Number === 0 && input % divisor2Number === 0) {
    return `${divisor1Text}${divisor2Text}`;
  } else if (input % divisor1Number === 0) {
    return divisor1Text;
  } else if (input % divisor2Number === 0) {
    return divisor2Text;
  } else {
    return input;
  }
}

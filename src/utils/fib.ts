export function fib(input: number, y = 1, z = 2): number[] {
  if (input === 1) {
    return [0, 1];
  } else {
    var sum = fib(input - 1);
    sum.push(sum[sum.length - y] + sum[sum.length - z]);
    return sum;
  }
}

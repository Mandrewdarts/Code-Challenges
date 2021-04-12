import { useState, FormEvent } from "react";
import { fizzbuzzFib } from "../utils/fizzbuzz-fib";

export function FizzBuzzFibComponent() {
  const [input, setInput] = useState<number>(0);

  // FizzBuzz
  const [divisor1, setDivisor1] = useState<[number, string]>([3, "fizz"]);
  const [divisor2, setDivisor2] = useState<[number, string]>([5, "buzz"]);

  // Fib
  const [y, setY] = useState<number>(1)
    const [z, setZ] = useState<number>(2)

  const [answer, setAnswer] = useState<(string | number)[]>([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input !== 0) {
      setAnswer(fizzbuzzFib(input, y, z, divisor1, divisor2));
    }
  }

  return (
    <div>
      <h1>FizzBuzzFib</h1>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="input" className="m-1">
          <span className="mr-1">Input</span>
          <input
            id="input"
            className="p-1"
            type="text"
            value={input}
            onChange={(e) => setInput(+e.target.value)}
          />
        </label>

        {/* Fib */}
        <label htmlFor="y" className="m-1">
            <span className="mr-1">Y</span>
            <input 
                id="y"
                className="p-1"
                type="text" 
                value={y} 
                onChange={(e) => setY(+e.target.value)}/>
            </label>

            <label htmlFor="z" className="m-1">
            <span className="mr-1">Z</span>
            <input 
                id="z"
                className="p-1"
                type="text" 
                value={z} 
                onChange={(e) => setZ(+e.target.value)}/>
            </label>

        {/* Divisor 1 */}
        <label htmlFor="divisor1-number" className="m-1">
          <span className="mr-1">Divisor 1 - Number</span>
          <input
            id="divisor1-number"
            className="p-1"
            type="text"
            value={divisor1[0]}
            onChange={(e) => setDivisor1([+e.target.value, divisor1[1]])}
          />
        </label>

        <label htmlFor="divisor1-string" className="m-1">
          <span className="mr-1">Divisor 1 - String</span>
          <input
            id="divisor1-number"
            className="p-1"
            type="text"
            value={divisor1[1]}
            onChange={(e) => setDivisor1([divisor1[0], e.target.value])}
          />
        </label>

        {/* Divisor 2 */}
        <label htmlFor="divisor2-number" className="m-1">
          <span className="mr-1">Divisor 2 - Number</span>
          <input
            id="divisor2-number"
            className="p-1"
            type="text"
            value={divisor2[0]}
            onChange={(e) => setDivisor2([+e.target.value, divisor2[1]])}
          />
        </label>

        <label htmlFor="divisor2-string" className="m-1">
          <span className="mr-1">Divisor 2 - String</span>
          <input
            id="divisor2-number"
            className="p-1"
            type="text"
            value={divisor2[1]}
            onChange={(e) => setDivisor2([divisor2[0], e.target.value])}
          />
        </label>
        <button className="p-1 m-1" type="submit">
          Submit
        </button>
      </form>
      <div>
        <b>{answer.join(", ")}</b>
      </div>
    </div>
  );
}

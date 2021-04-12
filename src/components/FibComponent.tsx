import { useState, FormEvent } from "react"
import { fib } from "../utils/fib"

export function FibComponent() {
    const [input, setInput] = useState<number>(1)
    const [y, setY] = useState<number>(1)
    const [z, setZ] = useState<number>(2)

    const [answer, setAnswer] = useState<number[]>([])

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if(input !== 0) {
            setAnswer(fib(input, y, z))
        }
    }

    return <div>
        <h1>Fib</h1>
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <label htmlFor="input" className="m-1">
            <span className="mr-1">Input</span>
            <input 
                id="input"
                className="p-1"
                type="text" 
                value={input} 
                onChange={(e) => setInput(+e.target.value)}/>
            </label>

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

            <button  className="p-1 m-1" type="submit">Submit</button>
        </form>
        <div>
            <b>{answer.join(', ')}</b>
        </div>
    </div>
}

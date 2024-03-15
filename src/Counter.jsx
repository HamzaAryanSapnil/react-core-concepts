import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        // ? why count ++ didn't worked here?
        let newCount = count + 1;
        setCount(newCount);
    };
    const handleCountReduce = () => {
        let newCount = count - 1;
        setCount(newCount);
    };
    return(
        <>
        <div>
            <h3>Counter: {count} </h3>
            <button onClick={handleCount} >Count</button>
            <button onClick={handleCountReduce} >Reduce</button>
        </div>
        </>
    )
}
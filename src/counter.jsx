import { useState } from "react"

export default function Counter(){
    const [count, setCount]= useState(0);
    const handellAdd = ()=>{
    const newCount = count+1;
    setCount(newCount)
    }

    const handelReduce =()=>{
        
        const newCount = count-1;
        setCount(newCount);


    }
    return(
        <div style={{border:'5px solid blue'}}>
            <h3>counter:{count}</h3>
            <button onClick={handellAdd}>ADD</button>
            <button onClick={handelReduce}>reduce</button>
        </div>
    )
}
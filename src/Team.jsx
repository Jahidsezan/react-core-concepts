import { useState } from "react"

export default function(){

    const [team,setTeam]= useState(11);
    const handleAdd = ()=>{
        const newTeam = team +1;
        setTeam(newTeam);
    }
    const handleremove = ()=>{
        const newTeam = team -1;
        setTeam(newTeam);
    }


    const teamStyle ={
        border:'5px solid red',
        margin:'15px',
        padding:'15px',
        borderRadius:'10px'
    }

    return(
        <div style={teamStyle}>
            <h1>players:{team}</h1>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleremove}>remove</button>
        </div>
    )
}
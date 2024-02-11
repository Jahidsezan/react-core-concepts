import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';

export default function Friends(){
    const [firends, setFreiends] = useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setFreiends(data))


    },[])


    return(
        <div className='box'>
            <h3>friend:{firends.length}</h3>
              {
                 firends.map(friend => <Friend frienda={friend}></Friend>)
              }
           
           
            
        </div>
    )
}
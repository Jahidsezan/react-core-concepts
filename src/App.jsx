
import './App.css'
import Counter from './counter'
import Friend from './Friend'
import Friends from './Friends'
import Team from './Team'
import User from './User'

function App() {

  function handelClick(){
    alert('button clicked')

  }
  const handelClick2 =()=>{
    alert('2btn click')
  }

  const addTofive=(num)=>{
    alert(num + 5);

  }
  

  return (
    <>
      <h3> React core concepts</h3>

     <Friends></Friends>
     <Friend></Friend>
      <User></User>
  
      <Team></Team>
      <Counter></Counter>
   
      <button onClick={handelClick}>click me</button>
      <button onClick={handelClick2}>click2</button>

      <button onClick={()=>{alert('third click')}}>third</button>
      <button onClick={()=>addTofive(5)}> four</button>

    </>
  )
}

export default App

import { useState } from 'react';
import './App.css';
import FibClock from './Components/FibClock/FibClock';
function App() {
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  
  return (
    <div className="App">
      <p style={{fontSize:"60px",fontFamily:"fantasy",color:"black"}}>Fibonacci Clock</p>
      <FibClock/>
      <p style={{fontSize:"60px",fontFamily:"fantasy",color:"black"}}>{ctime}</p>
    </div>
  );
}

export default App;

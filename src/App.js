import { useState } from 'react';
import './App.css';

function App() {
  const [scr,setScr]=useState(0)
  let array=[];
  for(let i=1;i<31;i++){
    if(i<10){
      array.push("0"+i)
    }
    else{
      array.push(i);
    }
  }
  const amount=170;
  function handleLeft(e){
    e.preventDefault();
    if(scr>0){
      let scroll=scr-amount;
      if(scroll<0){
        scroll=0;
      }
      setScr(scroll);
      document.getElementById('box').scrollLeft=scroll;
    }
  }
  function handleRight(e){
    e.preventDefault();
    if(scr<6500){
      let scroll=scr+amount;
      setScr(scroll);
      document.getElementById('box').scrollLeft=scroll;
    }
  }
  return (
    <>
    <div className="bigbox" id="box">
      {array.map((element)=><div className='b' id='b'><div className="box">{element}</div></div>)}
    </div>
    <div className='btns'>
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
    </div>
    </>
  );
}

export default App;

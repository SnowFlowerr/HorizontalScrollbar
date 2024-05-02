import './App.css';

function App() {
  let array = [];
  for (let i = 1; i < 31; i++) {
    if (i < 10) {
      array.push("0" + i)
    }
    else {
      array.push(i);
    }
  }
  const amount = 170.4;
  function handleLeft(e) {
    e.preventDefault();
    document.getElementById('bigbox').scrollLeft -= amount;
  }
  function handleRight(e) {
    e.preventDefault();
    document.getElementById('bigbox').scrollLeft += amount;
  }
  return (
    <div className='border'>
      <div className='bigg'>
        <div className="bigbox" id="bigbox">
          {array.map((element) => <div><div className="box">{element}</div></div>)}
        </div>
      </div>
      <div className='btns'>
        <button onClick={handleLeft}>Left</button>
        <button onClick={handleRight}>Right</button>
      </div>
    </div>
  );
}

export default App;

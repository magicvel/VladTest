
import useCounter from './useCounter';


function App() {
  const [count, minus, plus, reset, save, startMinus, stopCounter, startPlus] = useCounter(1);



  // const [count, setCount] = useState(0);
  // const minus = () => {
  //   return setCount(count - 1);
  // }
  // const plus = () => {
  //   return setCount(count + 1);
  // }
  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
        <>
          <button onClick={minus}
                  onMouseDown={startMinus}
                  onMouseUp={stopCounter}
                  onMouseLeave={stopCounter}
          >-</button>
          <button onClick={plus} 
                  onMouseDown={startPlus}
                  onMouseUp={stopCounter}
                  onMouseLeave={stopCounter}
          >+</button>
          <button onClick={reset}>reset</button>
          <button onMouseDown={save}>save</button>

        </>
      </header>
    </div>
  );
}

export default App;

import { useState, useRef } from "react";

export default function useCounter(initiaValue) {
 const [value, setValue] = useState(initiaValue);
 const ref = useRef(null)

//  useRef(() => {
//     return () => stopCounter();
//   }, []);

 const minus = () => {
     if (value <= 1) {
         return 
     }
    return setValue(value - 1);
  }
  const plus = () => {
     setValue(value + 1);
  }
  const reset = () => { 
      return setValue(initiaValue)
  }
  const save = () => {
      
      return console.log(value)
  }


  
  const startMinus = () => {
 
  if (value < 1) return;
    ref.current = setInterval(() => {
      setValue((prevCounter) => prevCounter - 1);
    }, 200);

  
  };

  const stopCounter = () => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };
  const startPlus = () => {
    if (ref.current) return;
    ref.current = setInterval(() => {
      setValue((prevCounter) => prevCounter + 1);
    }, 200);
  };



return [value, minus, plus, reset, save, startMinus, stopCounter, startPlus];
}
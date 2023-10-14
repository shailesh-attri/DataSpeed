import React from "react";
import { useEffect, useState } from "react";



const Content = () => {
  const [Hr, setHr] = useState(0);
  const [Min, setMin] = useState(0);
  const [Sec, setSec] = useState(0);
  const [MB, setMB] = useState(0);
  const [MyData, setMyData] = useState(0);
  const [GB, setGB] = useState(0);
  const [Rate, setRate] = useState(0);
  const [Text, setText] = useState(0);
  const [InputChange, setInputChange] = useState(0);
  const [Input2Change, setInput2Change] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // State to track timer running status

  const handlingInput = (event) => {
    setInputChange(event.target.value);
  };
  const handlingInput2 = (event) => {
    setInput2Change(event.target.value);
  };
  const handlingRate = (event) => {
    setRate(event.target.value);
  };
  var n = 0;
  if (parseInt(Rate, 10) === 2000) {
    n = 3.9;
  }
  if (parseInt(Rate, 10) === 1000) {
    n = 7.8;
  }
  if (parseInt(Rate, 10) === 500) {
    n = 15.6;
  }
  if (parseInt(Rate, 10) === 250) {
    n = 31.2;
  }
  if (parseInt(Rate, 10) === 125) {
    n = 62.5;
  }
  if (parseInt(Rate, 10) === 100) {
    n = 96;
  }
  if (parseInt(Rate, 10) === 50) {
    n = 192;
  }
  if (parseInt(Rate, 10) === 25) {
    n = 384;
  }

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (Sec === 59) {
          setSec(0);
          if (Min === 59) {
            setMin(0);
            setHr(Hr + 1);
          } else {
            setMin(Min + 1);
          }
        } else {
          setSec(Sec + 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [Sec, Min, Hr, isRunning]);

  const handlingStop = () => {
    setIsRunning(false); // Set isRunning to false to stop the timer
  };
  // const handlingStart = () => {
  //   setIsRunning(true);
  //   setMyData(parseInt(Rate) / 8);
  // };

  const handlingStart = () => {
    if (Rate && InputChange || Input2Change) {
      setIsRunning(true);
      setMyData(parseInt(Rate) / 8);
      // Start countdown logic here
    } else {
      alert("Please fill in all required fields");
    }
  };
  
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        if (MB === 1024) {
          setMB(0);
          setGB(GB + 1);
        } else {
          setMB(MB + 1);
        }
      }, n);
      return () => clearInterval(interval);
    }
  }, [MB, GB, isRunning]);

  const handlingReset = () => {
    setHr(0);
    setMin(0);
    setSec(0);
    setMB(0);
    setGB(0);
    setInput2Change("")
    setRate("")
    setMyData(0);
    setIsRunning(false);
    setInputChange("");
  };
  useEffect(() => {
    if (GB == parseInt(InputChange, 10) || MB == parseInt(Input2Change, 10)) {
      handlingStop();
      // Stop the timer when GB reaches or exceeds the input value
    }
  }, [GB, MB, InputChange, Input2Change]);

  return (
    <div className="MainCon">
      <div className="container">
        <div className="hello">
          <h1>This is the Testing Demo of {Rate} Mbps Data </h1>
          <div className="info">
            <label htmlFor="">
              Enter your Connection Rate(Only Integer value){" "}
            </label>
            <div className="example">
              <p>Example : 1000Mbps, 500Mbps etc.</p>
              <input type="text" value={Rate} onChange={handlingRate} required />
            </div>
            <div className="in1">
              <div>
                <label htmlFor="">Enter your Target Download in GB </label>
                <input
                  type="text"
                  value={InputChange}
                  onChange={handlingInput}
                  required ></input>
              </div>

              <div>
                <label htmlFor="">Enter your Target Download in MB </label>
                <input
                  type="text"
                  value={Input2Change}
                  onChange={handlingInput2}
                  required ></input>
              </div>
            </div>
          </div>
          <div className="speed">
            <div className="SpeedHead">
              <span>Time</span> :{" "}
              {`H-${String(Hr).padStart(2, "0")} :M-${String(Min).padStart(
                2,
                "0"
              )}: S-${String(Sec).padStart(2, "0")}`}
            </div>
            <div className="SpeedHead">
              <span>Downloaded</span> : GB {GB} : MB {MB}
              <p>Your actual average download Speed is : {MyData} mbps</p>
              {isRunning ? null : <p>Target Completed </p>}
            </div>
          </div>

          <div className="btns">
            {isRunning ? (
              <button onClick={handlingStop}>Stop</button>
            ) : (
              <button onClick={handlingStart}>Start</button>
            )}
            <button onClick={handlingReset}>Reset</button>
          </div>
          <p className="copyright">shaileshattri83@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Content;

import React, {useEffect, useState} from "react";
import Header from "../components/Header";


export default function Stopwatch() {


    const [time, setTime] = useState(3333000);
    const [running, setRunning] = useState(false);
    const [currentStatus, setCurrentStatus] = useState("공부 준비중...");
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    const initClickButton = () => {
        setCurrentStatus("초기화됨");
        setTime(0);

    }
    const startClickButton = () => {
        setCurrentStatus("공부중....!");
        setRunning(true);
    }
    const pauseClickButton = () => {
        setCurrentStatus("휴식중..........");
        setRunning(false);
    }

    return (
        <div>
            <Header />
            <div className="stopwatchBody">
              <div className="numbers">
                  <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
                  <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                  <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>

                   <br />
                    <p>{currentStatus}</p>
                </div>
                <div className="buttons">
                    <button className="snip1535" onClick={startClickButton}>공부시작!</button>
                    <button className="snip1535" onClick={pauseClickButton}>잠깐 쉬기</button>
                    <button className="snip1535" onClick={initClickButton}>초기화</button>
                </div>
            </div>
        </div>
    )
}

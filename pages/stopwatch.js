import React, {useEffect, useState} from "react";


export default function Stopwatch() {


    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(0);
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
        <div className="stopwatch">
            <div className="numbers">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                <br />
                <p>{currentStatus}</p>
            </div>
            <div className="buttons">
                <button onClick={startClickButton}>공부시작!</button>
                <button onClick={pauseClickButton}>잠깐 쉬기</button>
                <button onClick={initClickButton}>초기화</button>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
    const getCurrentTime = () => {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        };
    };

    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [tick, setTick] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return function () {
            clearInterval(intervalId);
        };
    }, []); // componentDidMount(), componentWillUnmount()

    useEffect(() => {
        setTick(tick + 1);
    }, [currentTime]);

    return tick % 10 === 0 ? null : (
        <Clock
            title={`Clock Component II: ${tick}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds}
        />
    );
}

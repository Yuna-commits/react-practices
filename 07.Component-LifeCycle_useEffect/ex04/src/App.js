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

    // hooks
    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [tick, setTick] = useState(1);

    useEffect(() => {
        /* after mount */
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
            setTick((x) => {
                return x + 1;
            });
        }, 1000);

        return () => {
            /* before unmount */
            clearInterval(intervalId);
        };
    }, []); // componentDidMount(), componentWillUnmount()

    return tick % 10 === 0 ? null : (
        <Clock
            title={`Clock Component II: ${tick}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds}
        />
    );
}

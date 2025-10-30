import React from "react";
import "./assets/scss/Clock.scss";

export default function Clock({ title, hours, minutes, seconds }) {
    return (
        <div className="clock-display">
            <h2>{title}</h2>
            <div className="clock-field">
                <div>
                    <p className="hours">
                        {"0" + (hours > 12 ? hours - 12 : hours)}
                    </p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{("0" + minutes).slice(-2)}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{("0" + seconds).slice(-2)}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="AmPm">
                    <div>
                        <p className={hours < 12 ? "on" : "off"}>am</p>
                    </div>
                    <div>
                        <p className={hours > 12 ? "on" : "off"}>pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

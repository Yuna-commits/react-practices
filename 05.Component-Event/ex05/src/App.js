import React, { Component } from "react";
import "./assets/scss/App.scss";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className={"App"}
                ref={(ref) => {
                    this.outerRef = ref;
                }}
                onScroll={() => {
                    console.log(
                        this.outerRef.scrollTop,
                        this.outerRef.clientHeight,
                        this.innerRef.clientHeight
                    );
                    if (
                        this.innerRef.clientHeight ===
                        this.outerRef.scrollTop + this.outerRef.clientHeight
                    ) {
                        console.log("call api");
                    }
                }}
            >
                <div
                    ref={(ref) => {
                        this.innerRef = ref;
                    }}
                >
                    <ul>
                        {Array.from({ length: 100 }, (_, i) => i + 1).map(
                            (i) => (
                                <li key={i}>{`아이템 ${i} 입니다.`}</li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

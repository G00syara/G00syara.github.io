import React from "react";
import "../js/timer"

class Timer extends React.Component {
    render(){
        return (
            <div class="timer">
            <p>Timer</p>
            <div id="time"><time>00:00:00</time></div>
            </div>
        )
    }
}
export default Timer
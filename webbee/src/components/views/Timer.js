import React from 'react'
import Time from '../js/timer'

class Timer extends React.Component {
  render() {
    return (
      <div class='timer'>
        <p>Timer</p>
        <div id='time'>
          <Time />
        </div>
      </div>
    )
  }
}
export default Timer

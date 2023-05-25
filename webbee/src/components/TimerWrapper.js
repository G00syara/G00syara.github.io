import React from 'react'
import Timer from './TimerCounter'

class TimerWrapper extends React.Component {
  render() {
    return (
      <div id='time' class='time_hidden'>
        <Timer />
      </div>
    )
  }
}
export default TimerWrapper

import React, { useContext, useMemo } from 'react'
import { Context } from '../Context'

function Timer() {
  const { time } = useContext(Context)

  const cachedTime = useMemo(() => {
    let hours = ~~(Number(time) / 3600)
    let minutes = ~~(Number(time) / 60) % 60
    let seconds = Number(time) % 60
    return (
      (hours > 9 ? hours : '0' + hours) +
      ':' +
      (minutes > 9 ? minutes : '0' + minutes) +
      ':' +
      (seconds > 9 ? seconds : '0' + seconds)
    )
  }, [time])
  return (
    <div class='timer'>
      <p>Timer</p>
      <div id='time'>{cachedTime}</div>
    </div>
  )
}
export default Timer

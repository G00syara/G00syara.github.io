import React, {useEffect, useState} from 'react'

const Timer = () => {
  let [seconds, setSeconds] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [hours, setHours] = useState(0)

  let timer

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(Number(seconds) + 1)
      setMinutes(Number(minutes))
      setHours(Number(hours))

      if (seconds >= 59) {
        setMinutes(Number(minutes) + 1)
        setSeconds(0)
      }
      if (minutes >= 60) {
        setHours(hours + 1)
        setMinutes(0)
        setSeconds(0)
      }
      sessionStorage.setItem('seconds', seconds)
      sessionStorage.setItem('minutes', minutes)
      sessionStorage.setItem('hours', hours)
    }, 1000)

    return () => clearInterval(timer)
  })
  useEffect(() => {
    seconds = sessionStorage.getItem('seconds')
    minutes = sessionStorage.getItem('minutes')

    hours = sessionStorage.getItem('hours')

    seconds = Number(seconds) + 1
    minutes = Number(minutes)
    hours = Number(hours)
  }, [])

  console.log(hours, minutes, seconds)

  return (
    <div id='time'>
      <time>
        {hours < 10 ? '0' + hours : hours}:
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </time>
    </div>
  )
}
export default Timer

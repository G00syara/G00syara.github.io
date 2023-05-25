import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from './Context'

const Timer = () => {
  let [time, setTime] = useState(+sessionStorage.getItem('time') + 1)
  const context = useContext(Context)
  console.log(context)

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

  useEffect(() => {
    setTimeout(() => {
      setTime(Number(time) + 1)
      context.setTime((prevValue) => {
        // if (!prevValue) return 0
        return prevValue + 1
      })
      sessionStorage.setItem('time', time)
    }, 1000)
  })

  return cachedTime
}
export default Timer

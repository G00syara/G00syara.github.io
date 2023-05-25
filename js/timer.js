const accurateTimer = (fn, time) => {
  let nextAt, timeout
  nextAt = new Date().getTime() + time

  const wrapper = () => {
    nextAt += time

    timeout = setTimeout(wrapper, nextAt - new Date().getTime())
    fn()
  }

  const cancel = () => clearTimeout(timeout)

  timeout = setTimeout(wrapper, nextAt - new Date().getTime())

  return {cancel}
}
let timer2 = accurateTimer(() => add, 1000)

const startTimer = () => {
  if (on) return
  timer2 = accurateTimer(() => {
    elapsedSeconds++
    on = true
    let minutes = Math.floor(elapsedSeconds / 60),
      seconds = elapsedSeconds % 60
    seconds = seconds > 9 ? seconds : `0${seconds}`
    document.getElementById('timer').innerHTML = `${minutes}:${seconds}`
    console.log(`${elapsedSeconds} seconds have passed.`)
  })
}

function add() {
  let time = sessionStorage.getItem('timer')
  time++

  if (document.getElementById('time')) {
    let hours = ~~(time / 3600)
    let minutes = ~~(time / 60) % 60
    let seconds = time % 60
    document.getElementById('time').textContent =
      (hours > 9 ? hours : '0' + hours) +
      ':' +
      (minutes > 9 ? minutes : '0' + minutes) +
      ':' +
      (seconds > 9 ? seconds : '0' + seconds)
  }
  sessionStorage.setItem('timer', time)
  timer()
}

function timer() {
  if (!sessionStorage.getItem('timer')) sessionStorage.setItem('timer', 0)
  setTimeout(add, 1000)
}

timer()

function Timer(callback, timeInterval) {
  this.timeInterval = timeInterval
  this.start = () => {
    this.expected = Date.now() + this.timeInterval
    this.timeout = setTimeout(this.round, this.timeInterval)
  }
  this.round = () => {
    let drift = Date.now() - this.expected
    callback()
    this.expected += this.timeInterval
    this.timeout = setTimeout(this.round, this.timeInterval - drift)
    clearTimeout(this.round)
  }
}

const accurateTimer = (fn, time = 1000) => {
  let nextAt, timeout;
  nextAt = new Date().getTime() + time;
 
  const wrapper = () => {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    fn();
  };
   const cancel = () => clearTimeout(timeout);
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return { cancel };
};

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
}

function timer() {
  if (!sessionStorage.getItem('timer')) sessionStorage.setItem('timer', 0)
  const myTimer = new Timer(() => add(), 1000)

  myTimer.start()
}

timer()

const hashPageTittle = 'JS SPA HASh-Rou'

const hashRouters = {
  '/': '/views/main.html',
  main: '/views/main.html',
  map: '/views/map.html',
  timer: '/views/timer.html',
}

const hashHandleLocation = async () => {
  let location = window.location.hash.replace('#', '')

  if (location.length == 0) {
    location = '/'
  }

  const route = hashRouters[location]
  const html = await fetch(route).then((response) => response.text())

  if (location === 'map')
    setTimeout(() => {
      ymaps.ready(init)
    }, 1000)
  document.getElementById('app').innerHTML = html

  const activeElem = document.querySelector('.active')
  if (activeElem) activeElem.classList.toggle('active')
  document.getElementById(location.split('.')[0]).classList.toggle('active')
}

window.addEventListener('hashchange', hashHandleLocation)
window.addEventListener('popstate', hashHandleLocation)
hashHandleLocation()

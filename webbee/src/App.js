import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import SecondHeader from './components/SecondHeader'
import Main from './components/views/Main'
import Map from './components/views/Map'
import Timer from './components/views/Timer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context } from './components/Context'

function App() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const intevalId = setInterval(() => {
      setTime((prevValue) => {
        return prevValue + 1
      })
    }, 1000)
    return () => clearInterval(intevalId)
  }, [])

  return (
    <Context.Provider value={{ time, setTime }}>
      <div className='name'>
        <main>
          <BrowserRouter>
            <Header />
            <SecondHeader />
            <Routes>
              <Route path='/' index element={<Main />} />
              <Route path='/map' index element={<Map />} />
              <Route path='/timer' index element={<Timer />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </Context.Provider>
  )
}

export default App

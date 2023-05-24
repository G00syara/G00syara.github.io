import React from 'react'
import Header from './components/Header'
import SecondHeader from './components/SecondHeader'
import Main from './components/views/Main'
import Map from './components/views/Map'
import Timer from './components/views/Timer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
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
    )
  }
}

export default App

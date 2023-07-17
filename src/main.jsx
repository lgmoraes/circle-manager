import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Nav from './components/Nav'
import styled from 'styled-components'
import './scss/main.scss'

const Main = styled.main`
  padding: 2em;
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/product" element={<Product />}></Route> */}
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Main>
    </Router>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Nav from './components/Nav'
import styled from 'styled-components'
import './scss/main.scss'

const Main = styled.main`
  padding: 2em;
`

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </React.StrictMode>
)

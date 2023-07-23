import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import Product from './pages/Product'
import Error404 from './pages/Error404'
import Nav from './components/Nav'
import './scss/main.scss'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:productId" element={<Product />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </main>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
)

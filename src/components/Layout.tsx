import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Layout: React.FC = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

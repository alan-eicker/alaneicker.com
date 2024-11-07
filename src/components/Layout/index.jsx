import * as React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

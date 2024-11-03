import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Footer from '../Footer'
import './Layout.module.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

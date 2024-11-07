import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'

import content from '../content/kudos.yaml'

const Kudos = () => (
  <Layout>
    <h1>{content?.heroText}</h1>
    {/* <section>
      <h2>{content?.heading}</h2>
      <p>{content?.text}</p>
    </section> */}
  </Layout>
)

export const Head = () => <Seo title="Kudos"></Seo>

export default Kudos

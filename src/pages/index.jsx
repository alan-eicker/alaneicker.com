import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'

import content from '../content/home.yaml'

const About = () => (
  <Layout>
    <h1>{content?.heroText}</h1>
    <section>
      <h2>{content?.heading}</h2>
      <p>{content?.text}</p>
    </section>
  </Layout>
)

export const Head = () => <Seo title="About Me"></Seo>

export default About

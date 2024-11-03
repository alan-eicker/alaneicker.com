import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'

import content from '../content/about.yaml'

const About = () => (
  <Layout>
    <h1>{content?.title}</h1>
    <p>{content?.text}</p>
  </Layout>
)

export const Head = () => <Seo title="About Me"></Seo>

export default About

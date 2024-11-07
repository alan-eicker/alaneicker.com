import * as React from 'react'

import Layout from '../components/Layout'
import ButtonGrid from '../components/ButtonGrid'
import Seo from '../components/seo'

import content from '../content/skills.yaml'

const Skills = () => {
  const [selectedItem, setSelectedItem] = React.useState()

  return (
    <Layout>
      <h1>{content?.heroText}</h1>
      {selectedItem && <div>JSON.stringify(selectedItem)</div>}
      <ButtonGrid
        items={content.skills}
        onClick={item => setSelectedItem(item)}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Skills"></Seo>

export default Skills

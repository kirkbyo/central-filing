import React from "react"
import StackGrid from "react-stack-grid"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import DefaultLayout from "../../components/default-layout"
import SEO from "../../components/seo"
import VintageQuote from '../../components/vintage-quote'

const Montreal = () => (
  <DefaultLayout className="article">
   <SEO title="Montréal" />
   <h1>Montréal</h1>
   <VintageQuote author="Centre d'histoire de Montréal">
   ‟Montreal is a living, dynamic entity, born from the encounter between a territory and a diversity of peoples. Like every city, it is in constant flux — never complete, always in the process of becoming. It bears the traces of those who came before: physical traces, reflected in the architecture and landscapes of its neighborhoods, and intangible traces, cast in lifestyles, languages and mentalities.”
   </VintageQuote>
   <h3>History</h3>
   <h3>Photo's</h3>
   <StaticQuery
     query={photoGraph}
     render={data => (
       <StackGrid gutterWidth={15} columnWidth={250}>
       { Object.keys(data).map((key) => {
         return <Img key={key} fixed={data[key].childImageSharp.fixed} />
       })
      }
       </StackGrid>
     )}
   />
  </DefaultLayout>
)

export default Montreal

const photoGraph = graphql`
fragment GridPhotoItem on File {
  childImageSharp {
    fixed(width: 250) {
      ...GatsbyImageSharpFixed
    }
  }
}

query {
  img1: file(relativePath: {eq: "montreal/mtl_img_1.JPG"}) {
    ...GridPhotoItem
  }
  img2: file(relativePath: {eq: "montreal/mtl_img_2.jpg"}) {
    ...GridPhotoItem
  }
  img3: file(relativePath: {eq: "montreal/mtl_img_3.jpg"}) {
    ...GridPhotoItem
  }
  img4: file(relativePath: {eq: "montreal/mtl_img_4.jpg"}) {
    ...GridPhotoItem
  }
  img5: file(relativePath: {eq: "montreal/mtl_img_5.jpg"}) {
    ...GridPhotoItem
  }
  img6: file(relativePath: {eq: "montreal/mtl_img_6.JPG"}) {
    ...GridPhotoItem
  }
  img7: file(relativePath: {eq: "montreal/mtl_img_7.jpg"}) {
    ...GridPhotoItem
  }
}`

import React from "react"
import StackGrid from "react-stack-grid"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { SizeMe } from "react-sizeme"

import DefaultLayout from "../../components/default-layout"
import SEO from "../../components/seo"
import VintageQuote from "../../components/vintage-quote"

const Montreal = () => (
  <DefaultLayout className="article">
    <SEO title="Montréal" />
    <h1>Montréal</h1>
    <VintageQuote author="Centre d'histoire de Montréal">
      ‟Montreal is a living, dynamic entity, born from the encounter between a
      territory and a diversity of peoples. Like every city, it is in constant
      flux — never complete, always in the process of becoming. It bears the
      traces of those who came before: physical traces, reflected in the
      architecture and landscapes of its neighborhoods, and intangible traces,
      cast in lifestyles, languages and mentalities.”
    </VintageQuote>
    <h3>Photo's</h3>
    <StaticQuery
      query={photoGraph}
      render={data => (
        <SizeMe>
          {size => (
            <StackGrid
              gutterWidth={15}
              columnWidth={size.width <= 768 ? "100%" : 450}
            >
              {data.montreal.edges.map(node => (
                <Img key={node.node.id} fluid={node.node.fluid} />
              ))}
            </StackGrid>
          )}
        </SizeMe>
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
    montreal: allImageSharp(
      filter: { original: { src: { regex: "/mtl_img_/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

import React from "react"
import StackGrid from "react-stack-grid"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { SizeMe } from 'react-sizeme'

import DefaultLayout from "../../components/default-layout"
import SEO from "../../components/seo"
import VintageQuote from '../../components/vintage-quote'

const content = (data) => (
  <DefaultLayout className="article">
    <SEO title="Poland + Ukraine 2019" />
    <h1>Poland + Ukraine 2019</h1>
    <h3>Poland (Aug. 26th - Sept 1st)</h3>
    <h4>POLIN Museum of the History of Polish Jews</h4>
    <Img key={"POLIN_ticket"} fixed={data["POLIN_ticket"].childImageSharp.fixed} />
    <p><i>Quotes and stories collected from the Museum</i></p>
    <hr />
    <VintageQuote author="The strike commitee of Fayvl lanowski's cigarette factory in Białystok, 1901">
      When Fayvl Janowski dismissed 45 jewish girls and employed Christian women instead, the Białystok workers called for a boycott. It was not yet common practice to strike, which was still considered a radical form of protest. Nor were workers ready to suffer the loss of wages during a strike. Strikes would soon become the most effective way to pressure bosses into meeting workers' demands.
   </VintageQuote>
    <hr />
    <VintageQuote author="Aleksandra Sołowiejczyk-Guter in her memoir">
      There was no time for despair. The tragedy was too general, it embraced everyone. One could not expect sympath from anyone, we were all in the same situation ... There was nothing great, or poignant, or extrodinary about this experience of death ... One simply said 'they have my child', and there was nothing more to say
   </VintageQuote>

    <hr />
    <p>"News of the genocide fell on deaf ears. Calls for help from the Allies, international organizations, and the Pope failed. In utter despair, feeling helpless and toally alone, Shmul Zygielbojm, Bund leader and member of the Polish government-in-exile, commited suicide. In his last letter, he wrote:</p>
    <VintageQuote author="Szmul Zygielbojm">
      By my death, I wish to give expression to my deepest protest against the inaction of a world that watches and allows the destruction of the Jewish People."
   </VintageQuote>
    <hr />

    <h4>Photo's</h4>
    <SizeMe>
      {(size) => (
        <StackGrid gutterWidth={15} columnWidth={size.width <= 768 ? '100%' : 450}>
          {data.poland.edges.map((node) => <Img key={node.node.id} fluid={node.node.fluid} />)}
        </StackGrid>
      )}
    </SizeMe>
    <br />
    <br />
    <h3>Ukraine (Sept. 2nd - Sept. 7th)</h3>
    <SizeMe>
      {(size) => (
        <StackGrid gutterWidth={15} columnWidth={size.width <= 768 ? '100%' : 450}>
          {data.ukraine.edges.map((node) => <Img key={node.node.id} fluid={node.node.fluid} />)}
        </StackGrid>
      )}
    </SizeMe>
  </DefaultLayout>
)

export default () => (<StaticQuery query={query} render={content} />)

const query = graphql`
query {
  POLIN_ticket: file(relativePath: {eq: "poland_ukraine_2019/POLIN_ticket.jpeg"}) {
    childImageSharp {
      fixed(height: 250) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  poland: allImageSharp(filter: {original: {src: { regex: "\/poland_2019_\/" }}}) {
    edges {
      node {
        id
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
    	}
  	}
  }

  ukraine: allImageSharp(filter: {original: {src: { regex: "\/ukraine_2019_\/" }}}) {
    edges {
      node {
        id
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
    	}
  	}
  }
}`

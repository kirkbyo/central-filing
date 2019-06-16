import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { chunk } from "../utils/array"
import { idify } from "../utils/util"

import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"
import EmojiHeadingStack from '../components/emoji-heading-stack'
import Quote from '../components/quote'
import { Row, Col } from 'react-simple-flex-grid';

const Quotes = () => (
  <DefaultLayout className="article">
    <SEO title="Quotes" />
    <h1 className="simple-left-h1">Quotes</h1>
    <h2>Collection of quotes that I have pondered</h2>
    <StaticQuery
      query={quotesQuery}
      render={data => {
        const categories = data.allQuotesJson.edges.map(item => item.node)
        return buildQuotesFromCategories(categories)
      }}
    />
  </DefaultLayout>
)

export default Quotes

function buildQuotesFromCategories(categories) {
  return (
    <>
      { buildCategoriesSelector(categories) }
      <br/>
      { buildQuotes(categories) }
    </>
  )
}

function buildCategoriesSelector(categories) {
  let chunkedCategories = chunk(categories, 4)

  let rows = []
  for (var row=0; row < chunkedCategories.length; row++) {
    let cols = []

    for (var col=0; col < chunkedCategories[row].length; col++) {
      let colData = chunkedCategories[row][col]

      cols.push(
        <Col xs={12} sm={3} key={"cat" + col + row}>
          <EmojiHeadingStack
            title={colData.name}
            emoji={colData.emoji}
            link={"#" + idify(colData.name)}
          />
        </Col>
      )
    }

    rows.push(<Row key={row}>{ cols }</Row>)
  }
  return rows
}

function buildQuotes(categories) {
  let elements = []

  for (var i=0; i < categories.length; i++) {
    let category = categories[i];

    elements.push(
      <h3 id={idify(category.name)}>
        <a href={"#" + idify(category.name)}>{ category.name }</a>
      </h3>
    )

    for (var j=0; j < category.quotes.length; j++) {
      let quote = category.quotes[j]
      let id = "quote" + j + i

      elements.push(
        <Quote key={id} id={id} author={quote.author}>{quote.quote}</Quote>
      )
      elements.push(<br/>)
    }
  }
  return elements
}

const quotesQuery = graphql`
query {
  allQuotesJson {
    edges {
      node {
        emoji
        name
        quotes {
          quote
          author
        }
      }
    }
  }
}
`

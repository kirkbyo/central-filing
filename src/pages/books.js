import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { chunk } from "../utils/array"

import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"
import { Row, Col } from "react-simple-flex-grid"

const Books = () => (
  <DefaultLayout className="article">
    <SEO title="Books" />
    <h1>Books</h1>
    <h2>My notes on books that I have read</h2>
    <br />
    <StaticQuery
      query={booksQuery}
      render={data => {
        const books = data.allMarkdownRemark.edges.map(
          item => item.node.frontmatter
        )
        return buildBooks(books)
      }}
    />
  </DefaultLayout>
)

function buildBooks(books) {
  const chunkedBooks = chunk(books, 2)

  return chunkedBooks.map((row, i) => {
    return <Row key={i}>{row.map(buildBook)}</Row>
  })
}

function buildBook(book) {
  const styles = {
    color: "black",
    textAlign: "center",
  }
  return (
    <Col xs={12} sm={6} key={book.path}>
      <Link to={book.path}>
        <p style={styles}>
          <b>{book.title}</b>
        </p>
      </Link>
    </Col>
  )
}

export default Books

const booksQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

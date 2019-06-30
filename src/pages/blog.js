import React from "react"

import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"

const Blog = () => (
  <DefaultLayout className="article">
    <SEO title="Guides" />
    <h1>Blog</h1>
    <h2>A collection a words organized into sentences</h2>
    <br />
    <p>More to come later</p>
  </DefaultLayout>
)

export default Blog

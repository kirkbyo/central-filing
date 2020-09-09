import React from "react"
import SEO from "../components/seo"
import DefaultLayout from "../components/default-layout"
import FancyHeading from "../components/fancy-heading"
import Internship from "../components/internship"
import SkillsTag from "../components/SkillsTag"
import { Row, Col } from "react-simple-flex-grid"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Quotes = () => (
  <DefaultLayout showHeader={false} className="article">
    <SEO
      title="MECH460/462 E-Portfolio"
      description="E-Portfolio as part of the requirements for MECH 460/462"
    />
    <FancyHeading>
      <h1>Ozzie Kirkby</h1>
    </FancyHeading>
    <Row>
      <Col sm={12}>
        <Content />
      </Col>
    </Row>
  </DefaultLayout>
)

const Content = () => (
  <>
    <p className="subheading">About Me</p>
    <p>
      4th-year Mechanical Engineering student at Queen's University. I am
      particularly interested in computer modelling, tools for learning, and the
      intersection of biology and engineering. Outside of school, I have
      acquired a wide breadth of programming experience, from building modern
      web applications, to working on data pipelines, to launching iOS apps.
      This has led me to internships at{" "}
      {
        <a className="lk-cb" target="_bank" href="https://www.coinbase.com/">
          Coinbase
        </a>
      }{" "}
      and{" "}
      {
        <a className="lk-green" target="_bank" href="https://www.shopify.com/">
          Shopify
        </a>
      }{" "}
      where I have had to opportunity to write code at scale. When I am not
      studying, I am either working on my side projects, learning Russian or
      running.
    </p>
    <p>
      As a person, I aim to be continuously curious, solution-oriented and a
      team-player at heart. I excel whenever I have the ability to intersect my
      software engineering background with mechanical problems, creating unique
      perspectives and potential solutions. However, I am actively working on
      avoiding my tendency to over-engineer solutions. The beauty of simplicity
      is a goal I am constantly looking to attain.
    </p>
    <div style={{ display: "flex" }}>
      <SkillsTag name="Python" color="orange" />
      <SkillsTag name="iOS development" color="orange" />
      <SkillsTag name="MATLAB" color="orange" />
      <SkillsTag name="Full-stack Software Development" color="orange" />
      <SkillsTag name="MySql" color="orange" />
      <SkillsTag name="Data Visualization" color="orange" />
    </div>
    <p className="subheading">Internships</p>
    <Row>
      <Col xs={12}>
        <Internship
          name={"Coinbase"}
          jobTitle={"Software Engineer Intern"}
          term={"Summer 2020"}
        >
          <li>
            Converted a high-performance HTML canvas implementation to be React
            based, improving the performance by 20%.
          </li>
          <li>
            Implemented Bazel tooling specific to frontend development in a
            Monorepo setting. Aligned several teams on a single configurations
            to be shared.
          </li>
          <li>
            Integrated chart market visualizations for institutional investors,
            allowing them to understand the market conditions in real-time.
          </li>
        </Internship>
      </Col>
      <Col xs={12}>
        <Internship
          name={"Shopify"}
          jobTitle={"Software Engineer Intern"}
          term={"Summer 2019"}
        >
          <li>
            Developed dimensional models using PySpark and star modelling
            techniques to identify potential performance improvements within the
            Data Infrastructure.
          </li>
          <li>
            Designed a failure resilient architecture to manage the complicated
            state transitions for an internal product.
          </li>
          <li>
            Developed the fundamental architecture for a new system to allow for
            the discovery of data assets produced internally.
          </li>
        </Internship>
      </Col>
      <Col xs={12}>
        <Internship
          name={"Shopify"}
          jobTitle={"iOS Engineer Intern"}
          term={"Summer 2018"}
        >
          <li>
            Developed features to make it easier for merchants to gain insights
            into their business, reaching over 500k active users.
          </li>
          <li>
            Designed new components within the Home tab, resulting in a more
            reliable and engaging mobile experience.
          </li>
          <li>
            Integrated a new flow for merchants to identify, address, and
            monitor revenue opportunities within their business.
          </li>
        </Internship>
      </Col>
    </Row>
    <p className="subheading">MECH 323</p>
    <p>
      As part of the MECH 323 Machine Design course, we were divided into groups
      and tasked to design a gearbox for a remote-controlled car. The gearbox
      designed by each of the groups were set to compete in top speed and hill
      competition to see who designed the best gearbox. Our group settled on a
      single-stage shifting gearbox to ensure adequate performance in each of
      the competitions. I was primarily responsible for modeling each of the
      scenarios and writing simulations to ensure our design was feasible in
      practice. Below you'll see the 3D rendering of our proposed gearbox.
    </p>
    <div
      style={{
        width: "100%",
        display: "flex",
        backgroundColor: "#e7e7e7",
        justifyContent: "center",
        borderRadius: "8pt",
        overflow: "hidden",
        border: "1pt solid #e1e1e1",
      }}
    >
      <StaticQuery
        query={query}
        render={data => (
          <Img
            key={"gear box render"}
            fixed={data["GearBoxRendering"].childImageSharp.fixed}
          />
        )}
      />
    </div>

    <p className="subheading">APSC 202</p>
    <p>
      Having transferred into the engineering faculty, I had the opportunity to
      participate in the transfer section for APSC 200 which aims to make up for
      credits that typical first-year engineering students would typically
      complete. We were divided into groups with students from other disciplines
      and paired with a client from the community. My group was tasked with
      improving the experience for a local bike-enthusiast who was experiencing
      difficulties biking during the winter months. We designed and prototyped a
      set of skis that can be attached to her bicycle, improving performance and
      safety during the winter.
    </p>
    <div className="image-figure">
      <StaticQuery
        query={query}
        render={data => (
          <Img
            key={"ski render"}
            fixed={data["SkiRendering"].childImageSharp.fixed}
          />
        )}
      />
      <StaticQuery
        query={query}
        render={data => (
          <Img
            key={"ski render"}
            fixed={data["BikeRendering"].childImageSharp.fixed}
          />
        )}
      />
    </div>
  </>
)

const query = graphql`
  query {
    BikeRendering: file(
      relativePath: { eq: "mech-portfolio/bike-rendering.jpg" }
    ) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    SkiRendering: file(
      relativePath: { eq: "mech-portfolio/ski-rendering.jpg" }
    ) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    GearBoxRendering: file(
      relativePath: { eq: "mech-portfolio/gearbox-rendering.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Quotes

import React from "react"

import DefaultLayout from "../components/default-layout"
import FancyHeading from '../components/fancy-heading'
import Project from '../components/project'
import EmojiHeadingStack from '../components/emoji-heading-stack'
import { Row, Col } from 'react-simple-flex-grid';
import { Twitter, Github, LinkedIn } from '../components/social-icons'

const IndexPage = () => (
  <DefaultLayout showHeader={false}>
    <FancyHeading>
      <h1>Ozzie Kirkby</h1>
    </FancyHeading>
    <p className="subheading">About me</p>
    <p>Hey there, I’m Ozzie <span role="img" aria-label="wave">👋</span> I’m a Mechanical Engineering student at Queen’s University. In the past, I’ve interned at <a className="lk-green" target="_bank" href="https://www.shopify.com/">Shopify</a> for both iOS and Software Engineering. Right now, I am interested in learning data engineering, backend services, and product development. Otherwise, you’ll find me running, <a className="lk-blue" href="books">reading</a> or taking <a className="lk-black" href="https://unsplash.com/@ozziek">photos</a>.</p>
    <a href="resume.pdf">Resume</a>
    <br />
    <br />
    <br />
    <p className="subheading">Projects</p>
    <p className="caption">Hackathon projects can be found on <a href="https://devpost.com/kirkbyo">Devpost</a></p>
    <br />
    <Row>
      <Col xs={12} sm={6}>
        <Project
          title="Outflow"
          description="Manage the complexity of reacuring subscriptions. Instantly see where your money is going."
          apple="https://itunes.apple.com/us/app/outflow-subscription-manager/id975011878"
          github="https://github.com/outflowapp"
        />
      </Col>
      <Col xs={12} sm={6}>
        <Project
          title="BitLeague"
          description="Developed apart of a team at QHacks19. Create, browse, and vote on community recreations of Bitmojis"
          github="https://github.com/schmidyy/BitLeague"
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
        <Project
          title="Polydoxical"
          description="WWDC 17 Playground Submission. Interactive playground to experiment with roulettes and polygons"
          github="https://github.com/kirkbyo/Polydoxical"
        />
      </Col>
      <Col xs={12} sm={6}>
        <Project
          title="Dimensional"
          description="WWDC 18 Playground Submission. An experiment to naturally combine units of measurement with Swift code to ensure dimensionally homogenous calculations."
          github="https://github.com/kirkbyo/WWDC18"
        />
      </Col>
    </Row>
    <br/>
    <p className="subheading">Central Filing</p>
    <p className="caption">A filing cabinet for my thoughts.</p>
    <br/>
    <Row>
      <Col xs={12} sm={6} md={4}>
        <EmojiHeadingStack
          title="Books"
          description="My notes on books that I have read"
          emoji="📚"
          link="books"
        />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <EmojiHeadingStack
          title="Writings"
          description="A collection a words organized into sentences"
          emoji="📝"
          link="blog"
        />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <EmojiHeadingStack
          title="Guides"
          description="A breakdown of places I have lived / traveled"
          emoji="🗺"
          link="guides"
        />
      </Col>
    </Row>
    <footer>
      <div className="inline-stack social-icons">
        <Twitter height={`20px`} url="https://twitter.com/kirkbyo_" />
        <Github height={`20px`} url="https://github.com/kirkbyo"/>
        <LinkedIn height={`20px`} url="https://ca.linkedin.com/in/kirkbyo"/>
      </div>
      <p>© { new Date().getFullYear() } Ozzie Kirkby</p>
    </footer>
  </DefaultLayout>
)

export default IndexPage

import PropTypes from "prop-types"
import React from "react"
import { Row, Col } from 'react-simple-flex-grid';
import styles from "./styles/emoji-heading-stack.module.css"

const EmojiHeadingStack = ({ title, description, emoji, link }) => (
   <Row className={ styles.stack }>
    <Col span={2}>
      <span className={ styles.emoji } role="img">{ emoji }</span>
    </Col>
    <Col span={10}>
      <p className={ styles.stack_title }>{ title }</p>
      <p className={ styles.stack_desc }>{ description }</p>
    </Col>
   </Row>
)

EmojiHeadingStack.propTypes = {
  title:  PropTypes.string,
  description: PropTypes.string,
  emoji: PropTypes.string,
  link: PropTypes.string
}

EmojiHeadingStack.defaultProps = {
  title: `Title`,
  description: `Description`,
  emoji: `😎`,
  link: ``
}


export default EmojiHeadingStack

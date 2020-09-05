import PropTypes from "prop-types"
import React from "react"
import { Row, Col } from "react-simple-flex-grid"
import styles from "./styles/emoji-heading-stack.module.css"

const EmojiHeadingStack = ({ title, description, emoji, link }) => (
  <a href={link}>
    <Row className={styles.stack} key={title}>
      <Col span={2} className={styles.stack_emoji}>
        <span className={styles.emoji} role="img" aria-label={title}>
          {emoji}
        </span>
      </Col>
      <Col span={10} className={styles.stack_content}>
        <p className={styles.stack_title}>{title}</p>
        <p className={styles.stack_desc}>{description}</p>
      </Col>
    </Row>
  </a>
)

EmojiHeadingStack.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  emoji: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

EmojiHeadingStack.defaultProps = {
  title: `Title`,
  emoji: `😎`,
  link: ``,
}

export default EmojiHeadingStack

import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class About extends Component {
  render() {
    return <animated.div style={{ ...this.props.style }}>About</animated.div>
  }
}
export default About

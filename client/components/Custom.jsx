import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class Custom extends Component {
  render() {
    return <animated.div style={{ ...this.props.style }}>Custom</animated.div>
  }
}
export default Custom

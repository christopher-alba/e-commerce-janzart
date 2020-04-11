import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class SignUp extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return <animated.div style={{ ...this.props.style }}>SignUp</animated.div>
  }
}

export default SignUp

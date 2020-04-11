import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class Login extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return <animated.div style={{ ...this.props.style }}>Login</animated.div>
  }
}

export default Login

import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class Profile extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return <animated.div style={{ ...this.props.style }}>Profile</animated.div>
  }
}

export default Profile

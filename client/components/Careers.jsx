import React, { Component } from 'react'
import { animated } from 'react-spring/renderprops'
class Careers extends Component {
  render () {
    return <animated.div style={{ ...this.props.style }}>Careers</animated.div>
  }
}
export default Careers

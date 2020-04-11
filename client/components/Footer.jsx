import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class Footer extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return (
      <div className='footer' style={{ opacity: this.props.animation }}>
        Footer
      </div>
    )
  }
}

export default Footer

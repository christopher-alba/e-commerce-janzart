import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class Cart extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return <animated.div style={{ ...this.props.style }}>Cart</animated.div>
  }
}

export default Cart

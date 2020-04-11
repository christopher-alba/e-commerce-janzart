import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class Product extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return <animated.div style={{ ...this.props.style }}>Product</animated.div>
  }
}

export default Product

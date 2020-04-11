import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
class Products extends Component {
  state = {}

  componentDidMount() {}

  render() {
    console.log(this.props)

    return <animated.div style={{ ...this.props.style }}>Products</animated.div>
  }
}

export default Products

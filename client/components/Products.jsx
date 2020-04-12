import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import ItemCards from "./ItemCards"
import { searchQuery } from "./Navbar"
class Products extends Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps)

    if (
      this.props.renderProps.location.search !==
      prevProps.renderProps.location.search
    ) {
      this.setState({ currentProducts: this.query })
    }
  }

  getTitle = (query) => {
    if (query.includes("new")) {
      this.filter = "new"
      return "NEW ARTWORKS"
    } else {
      this.filter = ""
      return "VIEW ALL OUR ARTWORKS"
    }
  }
  render() {
    this.query = this.props.renderProps.location.search
    return (
      <animated.div style={{ ...this.props.style }} className='page'>
        <VisibilitySensor partialVisibility={true} minTopValue={50}>
          {({ isVisible }) => {
            return (
              <h1
                className={`home-featured-title ${
                  isVisible ? "visible" : "hidden"
                }`}
              >
                {this.title}
              </h1>
            )
          }}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} minTopValue={50}>
          {({ isVisible }) => {
            return (
              <div
                className={`home-featured-items ${
                  isVisible ? "visible" : "hidden"
                }`}
              >
                <ItemCards searchFilter={searchQuery} />
              </div>
            )
          }}
        </VisibilitySensor>
      </animated.div>
    )
  }
}

export default Products

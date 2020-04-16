import React, { Component } from "react"
import { animated, Spring } from "react-spring/renderprops"
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

  getTitle = () => {
    if (searchQuery !== "") {
      return `VIEWING ALL ${searchQuery.toUpperCase()}`
    } else {
      return "VIEW ALL OUR ARTWORKS"
    }
  }
  render() {
    return (
      <animated.div style={{ ...this.props.style }} className='page'>
        <Spring
          delay={1000}
          from={{ transform: "translateX(1000px)", opacity: 0 }}
          to={{ transform: "translateX(0px)", opacity: 1 }}
          config={{ duration: 1000 }}
        >
          {(props) => (
            <div className='container ' style={{ ...props }}>
              <h1 className='home-featured-title'>
                {this.getTitle()}
                <hr />
              </h1>
            </div>
          )}
        </Spring>

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

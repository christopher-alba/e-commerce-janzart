import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import ItemCards from "./ItemCards"
class New extends Component {
  render() {
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
                BROWSE OUR <span className='titleStrong'>NEW</span> ARTWORKS
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
                <ItemCards filter='new' />
              </div>
            )
          }}
        </VisibilitySensor>
      </animated.div>
    )
  }
}

export default New

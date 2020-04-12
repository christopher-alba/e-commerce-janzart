import React, { Component } from "react"
import { Link } from "react-router-dom"
import { animated, Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import ItemCards from "./ItemCards"
class Home extends Component {
  state = {}

  render() {
    return (
      <animated.div style={{ ...this.props.style }}>
        <div className='landingHome'>
          <Spring
            delay={1000}
            from={{ transform: "translateX(2000px)" }}
            to={{ transform: "translateX(0px)" }}
            config={{ duration: 1000 }}
          >
            {(props) => (
              <div className='container' style={{ ...props }}>
                <h1>UNIQUE - TIMELESS - PLEASING</h1>
              </div>
            )}
          </Spring>

          <div className=''>
            <div className='landingImages'>
              <Spring
                delay={1000}
                from={{
                  opacity: 0,
                  transform: "translateX(-400px)",
                }}
                to={{
                  opacity: 1,
                  transform: "translateX(0px)",
                }}
                config={{ duration: 1000 }}
              >
                {(props) => (
                  <div style={{ ...props }} className='home-custom'>
                    <Link to='/custom'>
                      <button>BROWSE PERSONALISED ARTWORKS</button>
                    </Link>
                  </div>
                )}
              </Spring>

              <img
                className='landingImage'
                src='https://picsum.photos/500/500?random=1'
                alt=''
              />
              <img
                className='landingImage'
                src='https://picsum.photos/500/500?random=2'
                alt=''
              />
              <img
                className='landingImage'
                src='https://picsum.photos/500/500?random=3'
                alt=''
              />
              <img
                className='landingImage'
                src='https://picsum.photos/500/500?random=4'
                alt=''
              />
              <img
                className='landingImage'
                src='https://picsum.photos/500/500?random=5'
                alt=''
              />
              <img
                className='landingImage'
                src='https://picsum.photos/500/500?random=6'
                alt=''
              />
              <img
                className='landingImage'
                src='https://picsum.photos/500/500?random=7'
                alt=''
              />
              <img
                className='landingImage'
                src='https://picsum.photos/500/500?random=8'
                alt=''
              />
            </div>
          </div>
        </div>

        <VisibilitySensor partialVisibility={true} minTopValue={50}>
          {({ isVisible }) => {
            return (
              <h1
                className={`home-featured-title ${
                  isVisible ? "visible" : "hidden"
                }`}
              >
                FEATURED ARTWORKS
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
                <ItemCards filter='featured' />
              </div>
            )
          }}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility={true} minTopValue={50}>
          {({ isVisible }) => {
            return (
              <h1
                className={`home-featured-title ${
                  isVisible ? "visible" : "hidden"
                }`}
              >
                ARTWORKS ON SALE
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
                <ItemCards filter='sale' />
              </div>
            )
          }}
        </VisibilitySensor>
      </animated.div>
    )
  }
}

export default Home

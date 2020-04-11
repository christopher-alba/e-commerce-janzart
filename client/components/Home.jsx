import React, { Component } from "react"
import { Link } from "react-router-dom"
import { animated } from "react-spring/renderprops"
class Home extends Component {
  state = {}

  render() {
    let style = this.props.animation
    return (
      <animated.div style={{ ...style }}>
        <div className='landingHome'>
          <div className='container'>
            <h1>UNIQUE - TIMELESS - PLEASING</h1>
          </div>
          <div className=''>
            <div className='landingImages'>
              <div className='home-custom'>
                <h2>PERSONALISED ARTWORKS</h2>
                <Link to='/custom'>
                  <button>BROWSE</button>
                </Link>
              </div>
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
        <div className='home-featured'>
          <div className='container'>
            <h1>FEATURED ARTWORKS</h1>
          </div>
        </div>
      </animated.div>
    )
  }
}

export default Home

import React, { Component } from "react"
import { VisibilitySensor } from "react-visibility-sensor"
import { Transition } from "react-spring/renderprops"
import { Rating } from "semantic-ui-react"
import { Link } from "react-router-dom"
var counter = 0
class ItemCards extends Component {
  render() {
    console.log(this.props.searchFilter)

    return [1, 2, 3, 4, 5, 6].map(() => {
      return (
        <Link to='/products/1'>
          <div className={`ui card ${true ? "visible" : "hidden"}`}>
            <div className='image'>
              <img
                src={`https://picsum.photos/${Math.floor(
                  Math.random() * 600 + 1000
                )}/500?random=${counter++}`}
              />
            </div>
            <div className='content'>
              <div className='header'>Matthew</div>
              <div className='meta'>
                <span className='date'>
                  {this.props.filter ? this.props.filter.toUpperCase() : null}
                </span>
              </div>
              <div className='description'>
                Matthew is a musician living in Nashville.
              </div>
            </div>
            <div className='extra content'>
              <a>
                Rating
                <Rating icon='heart' defaultRating={5} maxRating={5} disabled />
              </a>
            </div>
          </div>
        </Link>
      )
    })
  }
}

export default ItemCards

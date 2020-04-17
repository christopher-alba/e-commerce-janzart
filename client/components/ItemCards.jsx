import React, { Component } from "react"
import { VisibilitySensor } from "react-visibility-sensor"
import { Transition } from "react-spring/renderprops"
import { Rating } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { getProducts } from "../api/index"
var counter = 0
class ItemCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }
  processFilters = (filters) => {
    let letters = /^[0-9a-zA-Z\s]+$/
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].match(letters) === null) {
        filters = filters.replace(filters[i], "")
        i--
      }
    }

    return filters
  }
  //search filter is a string that contains key words
  componentDidUpdate(prevProps) {
    if (
      this.props.searchFilter != prevProps.searchFilter ||
      this.props.filter != prevProps.filter
    ) {
      let cleanString, filterSearchArray
      if (this.props.searchFilter !== undefined) {
        cleanString = this.processFilters(this.props.searchFilter)
        filterSearchArray = cleanString.split(" ")
      } else {
        filterSearchArray = this.props.searchFilter
      }

      getProducts(filterSearchArray, this.props.filter).then((products) => {
        this.setState({ products: products })
      })
    }
  }
  componentDidMount() {
    let cleanString, filterSearchArray
    if (this.props.searchFilter !== undefined) {
      cleanString = this.processFilters(this.props.searchFilter)
      filterSearchArray = cleanString.split(" ")
    } else {
      filterSearchArray = this.props.searchFilter
    }

    getProducts(filterSearchArray, this.props.filter).then((products) => {
      this.setState({ products: products })
    })
  }
  render() {
    return this.state.products.map((product) => {
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
              <div className='header'>{product.itemName}</div>

              <div className='description'>{product.itemDescription}</div>
            </div>
            <div className='extra content'>
              <a>
                Rating
                <Rating icon='heart' defaultRating={5} maxRating={5} disabled />
              </a>
            </div>
            <div className='extra content categories'>
              {product.categories.map((category) => {
                return <div className='cardCategory'>#{category}</div>
              })}
            </div>
          </div>
        </Link>
      )
    })
  }
}

export default ItemCards

import React, { Component } from 'react'
import { VisibilitySensor } from 'react-visibility-sensor'
import { Transition } from 'react-spring/renderprops'
import { Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getProducts } from '../api/index'
import { Carousel } from 'react-responsive-carousel'
var counter = 0
class ItemCards extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [],
		}
	}
	processFilters = filters => {
		let letters = /^[0-9a-zA-Z\s]+$/
		for (let i = 0; i < filters.length; i++) {
			if (filters[i].match(letters) === null) {
				filters = filters.replace(filters[i], '')
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
				filterSearchArray = cleanString.split(' ')
			} else {
				filterSearchArray = this.props.searchFilter
			}

			getProducts(filterSearchArray, this.props.filter).then(products => {
				this.setState({ products: products })
			})
		}
	}
	componentDidMount() {
		let cleanString, filterSearchArray
		if (this.props.searchFilter !== undefined) {
			cleanString = this.processFilters(this.props.searchFilter)
			filterSearchArray = cleanString.split(' ')
		} else {
			filterSearchArray = this.props.searchFilter
		}

		getProducts(filterSearchArray, this.props.filter).then(products => {
			this.setState({ products: products })
		})
	}
	render() {
		return this.props.carousel ? (
			<Carousel autoPlay={true} infiniteLoop={true}>
				{this.state.products.map(product => {
					return (
						<Link key={product.id} to={`/product/${product.id}`}>
							<div className={`ui card ${true ? 'visible' : 'hidden'}`}>
								<div className='image'>
									<img
										src={`https://picsum.photos/${1500}/500?random=${counter++}`}
									/>
								</div>
								<div className='content'>
									<div className='header'>{product.itemName}</div>

									<div className='description'>{product.itemDescription}</div>
								</div>
								<div className='extra content'>
									<div class='ui likes'>
										<i class='heart icon'></i> {product.favouritesCount} Likes
									</div>
								</div>
								<div className='extra content categories'>
									{product.categories.map(category => {
										return <div className='cardCategory'>#{category}</div>
									})}
								</div>
							</div>
						</Link>
					)
				})}
			</Carousel>
		) : (
			this.state.products.map(product => {
				return (
					<Link key={product.id} to={`/product/${product.id}`}>
						<div className={`ui card ${true ? 'visible' : 'hidden'}`}>
							<div className='image'>
								<img
									src={`https://picsum.photos/${1500}/500?random=${counter++}`}
								/>
							</div>
							<div className='content'>
								<div className='header'>{product.itemName}</div>

								<div className='description'>{product.itemDescription}</div>
							</div>
							<div className='extra content'>
								<div class='ui likes'>
									<i class='heart icon'></i> {product.favouritesCount} Likes
								</div>
							</div>
							<div className='extra content categories'>
								{product.categories.map(category => {
									return <div className='cardCategory'>#{category}</div>
								})}
							</div>
						</div>
					</Link>
				)
			})
		)
	}
}

export default ItemCards

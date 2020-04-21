import React, { Component } from 'react'
import { animated } from 'react-spring/renderprops'
import { getProduct } from '../api/index'
import { Container, Rating } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import { connect } from 'react-redux'
import { addToCart } from '../actions/index'
class Product extends Component {
	state = {
		product: null,
	}

	componentDidMount() {
		getProduct(this.props.renderProps.match.params.id)
			.then(res => {
				return res.body
			})
			.then(product => {
				this.setState({ product: product })
			})
		window.scrollTo(0, 0)
	}
	componentDidUpdate(prevProps) {
		if (
			prevProps.renderProps.match.params.id !=
			this.props.renderProps.match.params.id
		) {
			getProduct(this.props.renderProps.match.params.id)
				.then(res => {
					return res.body
				})
				.then(product => {
					this.setState({ product: product })
				})
			window.scrollTo(0, 0)
		}
	}
	addToCart(item) {
		this.props.addToCart(item)
		console.log(this.props)
	}
	render() {
		let product = this.state.product
		if (this.state.product === null) {
			return <div>Loading</div>
		} else {
			return (
				<animated.div style={{ ...this.props.style }} className='page'>
					<Container className='productPage'>
						<div>
							<Carousel infiniteLoop={true} autoPlay={true}>
								{product.itemImgIds.map(() => {
									return (
										<div>
											<img
												className='productImg'
												src={`https://picsum.photos/${1500}/500?random=1`}
											/>
										</div>
									)
								})}
							</Carousel>
							<div className='ratings'>
								<div>
									{product.favouritesCount}
									<i class='fas fa-heart'></i>
								</div>
								<p>
									5
									<Rating icon='star' defaultRating={5} maxRating={5} />{' '}
								</p>
							</div>
						</div>
						<div>
							<h1>{product.itemName}</h1>
							<p>{product.itemDescription}</p>
							<p>Current Price: {product.itemPrice}</p>
							<p>Orders Made: {product.orderCount}</p>
							<button
								onClick={() => {
									this.addToCart(product)
								}}>
								ADD TO CART
							</button>
							<div className='productCats'>
								{product.categories.map(category => {
									return <div className='productCat'>#{category}</div>
								})}
							</div>
						</div>
					</Container>
				</animated.div>
			)
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addToCart: item => dispatch(addToCart(item)),
	}
}
function mapStateToProps(state) {
	return {
		cart: state.cart,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

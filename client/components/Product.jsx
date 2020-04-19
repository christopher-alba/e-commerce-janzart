import React, { Component } from 'react'
import { animated } from 'react-spring/renderprops'
import { getProduct } from '../api/index'
import { Container } from 'semantic-ui-react'
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
	}

	render() {
		let product = this.state.product
		if (this.state.product === null) {
			return <div>Loading</div>
		} else {
			return (
				<animated.div style={{ ...this.props.style }} className='page'>
					<Container>
						<h1>{product.itemName}</h1>
						<p>{product.itemDescription}</p>
						<p>Current Price: {product.itemPrice}</p>
						<p>Orders Made: {product.orderCount}</p>
						<p>Favourites: {product.favouritesCount}</p>
						<div className='productCats'>
							{product.categories.map(category => {
								return <div className='productCat'>#{category}</div>
							})}
						</div>
					</Container>
				</animated.div>
			)
		}
	}
}

export default Product

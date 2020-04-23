import React, { Component } from 'react'
import { animated } from 'react-spring/renderprops'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table } from 'semantic-ui-react'
import { removeFromCart, updateQuantities } from '../actions/index'
import Checkout from './Checkout'
let counter = 0
class Cart extends Component {
	state = {
		cart: this.props.cart.items,
		checkout: false,
	}
	removeItem(id) {
		this.props.removeFromCart(id)
		let oldCart = [...this.state.cart]
		let newCart = oldCart.filter(itemObj => itemObj.item.id !== id)
		this.setState(
			{
				cart: newCart,
			},
			() => {
				console.log(this.state.cart)
			}
		)
	}
	handleQuantity(id, quantity) {
		this.setState(
			{
				cart: this.state.cart.map(item => {
					if (item.item.id === id) {
						let newObj = { ...item }
						newObj.quantity = Number(quantity)
						return newObj
					}
					return item
				}),
			},
			() => {
				// console.log(this.state)
			}
		)
	}

	handleQuantities(cartItemQuantities) {
		this.props.updateQuantities(cartItemQuantities)
	}
	render() {
		return (
			<animated.div style={{ ...this.props.style }} className='page'>
				<Container>
					<div className='cart'>
						<h1>Shopping Cart</h1>
						<Table>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Thumbnail</Table.HeaderCell>
									<Table.HeaderCell>Name</Table.HeaderCell>
									<Table.HeaderCell>Quantity</Table.HeaderCell>
									<Table.HeaderCell>Price</Table.HeaderCell>
									<Table.HeaderCell>Remove</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							{this.props.cart.items &&
								this.props.cart.items.map(cartItem => {
									return (
										<Table.Body>
											<Table.Row>
												<Table.Cell>
													<img
														className='thumbnail'
														src={`https://picsum.photos/${1500}/500?random=${counter++}`}
													/>
												</Table.Cell>
												<Table.Cell>
													<Link
														className='cartName'
														to={`/product/${cartItem.item.id}`}>
														{cartItem.item.itemName}
													</Link>
												</Table.Cell>
												<Table.Cell>
													<input
														class='update-input'
														placeholder={cartItem.quantity}
														onChange={evt => {
															this.handleQuantity(
																cartItem.item.id,
																evt.target.value
															)
														}}
													/>
												</Table.Cell>
												<Table.Cell>NZ${cartItem.item.itemPrice}</Table.Cell>
												<Table.Cell>
													<button
														className='ui button'
														onClick={() => {
															this.removeItem(cartItem.item.id)
														}}>
														<span class='fa fa-trash fa-2x'></span>
													</button>
												</Table.Cell>
											</Table.Row>
										</Table.Body>
									)
								})}
						</Table>
						<p class='actions'>
							<Link className='ui button continue' to='/products'>
								Continue shopping
							</Link>
							<button
								className='ui button update'
								onClick={() => this.handleQuantities(this.state.cart)}>
								Update
							</button>
							<button className='ui button checkout'>Checkout</button>
						</p>
					</div>
					{<Checkout />}
				</Container>
			</animated.div>
		)
	}
}
function mapStateToProps(state) {
	return {
		cart: state.cart,
	}
}
function mapDispatchToProps(dispatch) {
	return {
		removeFromCart: id => dispatch(removeFromCart(id)),
		updateQuantities: cartItemQuantities =>
			dispatch(updateQuantities(cartItemQuantities)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

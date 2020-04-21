import React, { Component } from 'react'
import { animated } from 'react-spring/renderprops'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table } from 'semantic-ui-react'
import { removeFromCart, updateQuantities } from '../actions/index'
class Cart extends Component {
	state = {}
	state = {
		cart: this.props.cart.items,
	}
	removeItem(id) {
		this.props.removeFromCart(id)
	}
	handleQuantity(id, quantity) {
		this.setState(
			{
				cart: this.state.cart.map(item => {
					if (item.item.id === id) {
						let newObj = { ...item }
						newObj.quantity = quantity
						return newObj
					}
					return item
				}),
			},
			() => {
				console.log(this.state)
			}
		)
	}

	handleQuantities(cartItemQuantities) {
		this.props.updateQuantities(cartItemQuantities)
	}
	render() {
		return (
			<animated.div style={{ ...this.props.style }}>
				<Container>
					<div className='cart'>
						<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Name</Table.HeaderCell>
									<Table.HeaderCell>Quantity</Table.HeaderCell>
									<Table.HeaderCell>Remove</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							{this.props.cart.items &&
								this.props.cart.items.map(cartItem => {
									return (
										<Table.Body>
											<Table.Row>
												<Table.Cell>{cartItem.item.itemName}</Table.Cell>
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
												<Table.Cell>
													<button
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
							<Link to='/products'>Continue shopping</Link>
							<button onClick={() => this.handleQuantities(this.state.cart)}>
								Update
							</button>
							<button class='button-primary'>Checkout</button>
						</p>
					</div>
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

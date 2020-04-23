import React, { Component } from 'react'
import { connect } from 'react-redux'

class Checkout extends Component {
	render() {
		return (
			<div className='page'>
				<p>
					Total:{' '}
					<span className='checkout'>
						NZ$
						{this.props.items.length > 0 &&
							this.props.items.reduce((accumulator, currentValue) => {
								console.log(currentValue)

								return (
									currentValue.item.itemPrice * currentValue.quantity +
									accumulator
								)
							}, 0)}
					</span>
				</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		items: state.cart.items,
	}
}

export default connect(mapStateToProps)(Checkout)

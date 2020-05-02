import React, { Component } from 'react'
import { animated } from 'react-spring/renderprops'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table } from 'semantic-ui-react'
import { removeFromCart, updateQuantities } from '../actions/index'
import Checkout from './Checkout'
import { startCheckout } from '../api/index'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_WzeFtVE3PB6qMqiu8NIuMyiN00dGLm0XQ5')
let counter = 0

class Cart extends Component {
state = {
  cart: this.props.cart.items,
  checkout: false
}
removeItem (id) {
  this.props.removeFromCart(id)
  let oldCart = [...this.state.cart]
  let newCart = oldCart.filter(itemObj => itemObj.item.id !== id)
  this.setState(
    {
      cart: newCart
    },
    () => {
      console.log(this.state.cart)
    }
  )
}
handleQuantity (id, quantity) {
  this.setState(
    {
      cart: this.state.cart.map(item => {
        if (item.item.id === id) {
          let newObj = { ...item }
          newObj.quantity = Number(quantity)
          return newObj
        }
        return item
      })
    },
    () => {
      // console.log(this.state)
    }
  )
}

handleQuantities (cartItemQuantities) {
  this.props.updateQuantities(cartItemQuantities)
}
handleClick = async event => {
// Call your backend to create the Checkout session.
  const { id } = await startCheckout(this.props.cart.items)
  const sessionId = id
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    sessionId
  })
}
render () {
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
    <Table.Body key={cartItem.id}>
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
            className='update-input'
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
            <span className='fa fa-trash fa-2x'></span>
          </button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
})}
          </Table>
          <p className='actions'>
            <Link className='ui button continue' to='/products'>
Continue shopping
            </Link>
            <button
              className='ui button update'
              onClick={() => this.handleQuantities(this.state.cart)}>
Update
            </button>
            <button
              className='ui button checkout'
              onClick={evt => {
                this.handleClick(evt)
              }}>
Checkout
            </button>
          </p>
        </div>
        {<Checkout />}
      </Container>
    </animated.div>
  )
}
}
function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}
function mapDispatchToProps (dispatch) {
  return {
    removeFromCart: id => dispatch(removeFromCart(id)),
    updateQuantities: cartItemQuantities =>
      dispatch(updateQuantities(cartItemQuantities))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

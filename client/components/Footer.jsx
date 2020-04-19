import React, { Component } from 'react'
import { animated } from 'react-spring/renderprops'
import { Link } from 'react-router-dom'
class Footer extends Component {
	state = {}

	state = {
		currentPage: '',
	}
	componentDidMount() {
		this.setState({
			currentPage: this.props.pathName.split('/')[1],
		})
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.pathName !== prevProps.pathName) {
			this.setState({
				currentPage: this.props.pathName.split('/')[1],
			})
		}
	}
	handleLinkClick = evt => {
		this.setState({
			currentPage: evt.target.name,
		})
	}
	render() {
		return (
			<div className='footer' style={{ opacity: this.props.animation }}>
				<div className='mailForm'>
					<div>
						<input
							type='text'
							placeholder='enter email and subscribe to our mailing list'
						/>
						<button>Subscribe!</button>
					</div>
				</div>
				<div className='footerNav'>
					<Link
						name=''
						onMouseDown={this.handleLinkClick}
						className={`nav-link ${
							this.state.currentPage === '' ? 'active' : ''
						}`}
						to='/'>
						HOME
					</Link>

					<Link
						name='new'
						onMouseDown={this.handleLinkClick}
						className={`nav-link ${
							this.state.currentPage === 'new' ? 'active' : ''
						}`}
						to='/new'>
						NEW
					</Link>
					<Link
						name='products'
						onMouseDown={this.handleLinkClick}
						className={`nav-link ${
							this.state.currentPage === 'products' ? 'active' : ''
						}`}
						to='/products'>
						PRODUCTS
					</Link>
					<Link
						name='custom'
						onMouseDown={this.handleLinkClick}
						className={`nav-link ${
							this.state.currentPage === 'custom' ? 'active' : ''
						}`}
						to='/custom'>
						CUSTOM
					</Link>
					<Link
						name='about'
						onMouseDown={this.handleLinkClick}
						className={`nav-link ${
							this.state.currentPage === 'about' ? 'active' : ''
						}`}
						to='/about'>
						ABOUT
					</Link>
					<Link
						name='careers'
						onMouseDown={this.handleLinkClick}
						className={`nav-link ${
							this.state.currentPage === 'careers' ? 'active' : ''
						}`}
						to='/careers'>
						CAREERS
					</Link>
				</div>
			</div>
		)
	}
}

export default Footer

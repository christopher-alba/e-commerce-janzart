import React, { Component } from 'react'
import { Responsive, Segment, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Transition, animated } from 'react-spring/renderprops'
import CatDropdown from './CatDropdown'
let searchQuery = ''
let catFilter = []
class Navbar extends Component {
	state = {
		menuDisplayed: false,
		searchQuery: '',
		currentPage: '',
		catFilter: [],
		catDisplayed: false,
	}

	handleClick = () => {
		this.setState({ menuDisplayed: !this.state.menuDisplayed })
	}
	handleCategories = () => {
		this.setState({ catDisplayed: !this.state.catDisplayed })
	}
	handleLinkClick = evt => {
		this.setState({
			currentPage: evt.target.name,
		})
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
	updateSearch = evt => {
		console.log(this.state.searchQuery)
		searchQuery = evt.target.value
		this.setState({ searchQuery: evt.target.value })
	}
	updateFilter = filters => {
		catFilter = filters
		console.log(catFilter)
		this.setState({ catFilter: filters })
	}
	render() {
		return (
			<div className='responsiveNav' style={{ opacity: this.props.animation }}>
				<Responsive as={Segment} minWidth={1000}>
					<div className='navbar'>
						<div className='container'>
							<div className='nav-brand'>JANZART</div>

							<div className='nav-end'>
								<div className='nav-cart'>
									<i className='fas fa-shopping-cart'></i>
								</div>
								<Link to='/login'>
									<div className='login'>LOGIN</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='nav-middle'>
						<div className='nav-links'>
							<div className='nav-links-inner'>
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
									CONTACT
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
						<div>
							<form className='searchbar'>
								<button onClick={this.handleCategories}>
									FILTERS <i class='far fa-caret-square-down'></i>
								</button>
								<input
									type='text'
									onChange={this.updateSearch}
									placeholder='Search for names and filters'
								/>
								<Link to={`/products/${this.state.searchQuery}`}>
									<button type='submit'>
										<i className='fas fa-search'></i>
									</button>
								</Link>
							</form>
							<Transition
								items={this.state.catDisplayed}
								from={{
									opacity: 0,
									position: 'fixed',
								}}
								enter={{
									opacity: 1,
									position: 'absolute',
								}}
								leave={{
									opacity: 0,
									position: 'fixed',
								}}>
								{show =>
									show &&
									(props => (
										<CatDropdown onChange={this.updateFilter} style={props} />
									))
								}
							</Transition>
						</div>
					</div>
				</Responsive>
				<Responsive as={Segment} maxWidth={1000}>
					<div className='mobile-nav'>
						<div className='mobile-nav-head'>
							<div className='nav-brand'>JANZART</div>
							<div className='nav-toggle' onMouseDown={this.handleClick}>
								<i className='fas fa-bars'></i>
							</div>
						</div>

						<form className='searchbar'>
							<button onClick={this.handleCategories}>
								FILTERS <i class='far fa-caret-square-down'></i>
							</button>
							<input type='text' onChange={this.updateSearch} />
							<Link to={`/products/${this.state.searchQuery}`}>
								<button type='submit'>
									<i className='fas fa-search'></i>
								</button>
							</Link>
						</form>
						<Transition
							items={this.state.catDisplayed}
							from={{
								opacity: 0,
								position: 'fixed',
							}}
							enter={{
								opacity: 1,
								position: 'absolute',
							}}
							leave={{
								opacity: 0,
								position: 'fixed',
							}}>
							{show =>
								show &&
								(props => (
									<CatDropdown onChange={this.updateFilter} style={props} />
								))
							}
						</Transition>
					</div>
					<Transition
						items={this.state.menuDisplayed}
						from={{
							opacity: 0,
							transform: 'translateY(-500px)',
							position: 'fixed',
						}}
						enter={{
							opacity: 1,
							transform: 'translateY(0px)',
							position: 'fixed',
						}}
						leave={{
							opacity: 0,
							transform: 'translateY(-500px)',
							position: 'fixed',
						}}>
						{show => show && (props => <Menu style={props} />)}
					</Transition>
				</Responsive>
			</div>
		)
	}
}

class Menu extends Component {
	state = {
		currentPage: '',
	}

	handleLinkClick = evt => {
		this.setState({
			currentPage: evt.target.name,
		})

		console.log(evt.target)
	}
	render() {
		return (
			<animated.div style={this.props.style} className='nav-menu'>
				<div className='mobile-nav-links'>
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
				<div className='mobile-cart'>
					<div className='nav-cart'>
						<i className='fas fa-shopping-cart'></i>
					</div>
					<Link to='/login'>
						<div className='login'>LOGIN</div>
					</Link>
				</div>
			</animated.div>
		)
	}
}
export default Navbar

export { searchQuery, catFilter }

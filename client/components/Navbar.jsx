import React, { Component, useState, useEffect } from 'react'
import { Responsive, Segment, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Transition, animated } from 'react-spring/renderprops'
import CatDropdown from './CatDropdown'
// authentication
import { useAuth0 } from '../react-auth0-spa'

let searchQuery = ''
let catFilter = []

export default function Navbar(props) {
	// states
	const [menuDisplayed, setMenuDisplayed] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [currentPage, setCurrentPage] = useState('')
	const [catFilter, setCatFilter] = useState([])
	const [catDisplayed, setCatDisplayed] = useState(false)
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		//update the current page/location of the user
		setCurrentPage(props.pathName.split('/')[1])
	})

	// methods
	function handleClick() {
		setMenuDisplayed(!menuDisplayed)
	}
	function updateSearch(evt) {
		searchQuery = evt.target.value //to be exported as a global variable
		setSearchQuery(evt.target.value)
	}

	function updateFilter(filters) {
		catFilter = filters //to be exported as a global variable
		setCatFilter(filters)
	}
	function handleCategories() {
		setCatDisplayed(!catDisplayed)
	}
	function handleLinkClick(evt) {
		setCurrentPage(evt.target.name)
	}
	return (
		<div className='responsiveNav' style={{ opacity: props.animation }}>
			<Responsive as={Segment} minWidth={1000}>
				<div className='navbar'>
					<div className='navbarImg'></div>
					<div className='container'>
						<div className='nav-brand'>JANZART</div>

						<div className='nav-end'>
							<Link className='login' to='/cart'>
								<i className='fas fa-shopping-cart nav-cart'></i>
							</Link>
							{!isAuthenticated && (
								<button className='login' onClick={() => loginWithRedirect({})}>
									Log in
								</button>
							)}
							{isAuthenticated && (
								<button className='login' onClick={() => logout()}>
									Log out
								</button>
							)}
							<Link className='login' to='/signup'>
								<div className='signup'>SIGN UP</div>
							</Link>
						</div>
					</div>
				</div>
				<div className='nav-middle'>
					<div className='nav-links'>
						<div className='nav-links-inner'>
							<Link
								name=''
								onMouseDown={handleLinkClick}
								className={`nav-link ${currentPage === '' ? 'active' : ''}`}
								to='/'>
								HOME
							</Link>

							<Link
								name='new'
								onMouseDown={handleLinkClick}
								className={`nav-link ${currentPage === 'new' ? 'active' : ''}`}
								to='/new'>
								NEW
							</Link>
							<Link
								name='products'
								onMouseDown={handleLinkClick}
								className={`nav-link ${
									currentPage === 'products' ? 'active' : ''
								}`}
								to='/products'>
								PRODUCTS
							</Link>
							<Link
								name='custom'
								onMouseDown={handleLinkClick}
								className={`nav-link ${
									currentPage === 'custom' ? 'active' : ''
								}`}
								to='/custom'>
								CUSTOM
							</Link>
							<Link
								name='about'
								onMouseDown={handleLinkClick}
								className={`nav-link ${
									currentPage === 'about' ? 'active' : ''
								}`}
								to='/about'>
								ABOUT
							</Link>
							<Link
								name='careers'
								onMouseDown={handleLinkClick}
								className={`nav-link ${
									currentPage === 'careers' ? 'active' : ''
								}`}
								to='/careers'>
								CONTACT
							</Link>
							<Link
								name='careers'
								onMouseDown={handleLinkClick}
								className={`nav-link ${
									currentPage === 'careers' ? 'active' : ''
								}`}
								to='/careers'>
								CAREERS
							</Link>
						</div>
					</div>
					<div>
						<form className='searchbar'>
							<button onClick={handleCategories}>
								FILTERS <i className='far fa-caret-square-down'></i>
							</button>
							<input
								type='text'
								onChange={updateSearch}
								placeholder='Search for names and filters'
							/>
							<Link to={`/products/${searchQuery}`}>
								<button type='submit'>
									<i className='fas fa-search'></i>
								</button>
							</Link>
						</form>
						<Transition
							items={catDisplayed}
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
								(props => <CatDropdown onChange={updateFilter} style={props} />)
							}
						</Transition>
					</div>
				</div>
			</Responsive>
			<Responsive as={Segment} maxWidth={1000}>
				<div className='mobile-nav'>
					<div className='mobile-nav-head'>
						<div className='nav-brand'>JANZART</div>
						<div className='nav-toggle' onMouseDown={handleClick}>
							<i className='fas fa-bars'></i>
						</div>
					</div>

					<form className='searchbar'>
						<button onClick={handleCategories}>
							FILTERS <i className='far fa-caret-square-down'></i>
						</button>
						<input type='text' onChange={updateSearch} />
						<Link to={`/products/${searchQuery}`}>
							<button type='submit'>
								<i className='fas fa-search'></i>
							</button>
						</Link>
					</form>
					<Transition
						items={catDisplayed}
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
							(props => <CatDropdown onChange={updateFilter} style={props} />)
						}
					</Transition>
				</div>
				<Transition
					items={menuDisplayed}
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

// class Navbar extends Component {
// 	constructor(props) {
// 		super(props)
// 		state = {
// 			menuDisplayed: false,
// 			searchQuery: '',
// 			currentPage: '',
// 			catFilter: [],
// 			catDisplayed: false,
// 		}
// 		const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
// 		this.isAuthenticated = isAuthenticated
// 		this.loginWithRedirect = loginWithRedirect
// 		this.logout = logout
// 	}

// 	handleClick = () => {
// 		this.setState({ menuDisplayed: !this.menuDisplayed })
// 	}
// 	handleCategories = () => {
// 		this.setState({ catDisplayed: !this.state.catDisplayed })
// 	}
// handleLinkClick = evt => {
// 	this.setState({
// 		currentPage: evt.target.name,
// 	})
// }
// 	componentDidMount() {
// 		this.setState({
// 			currentPage: this.props.pathName.split('/')[1],
// 		})
// 	}
// 	componentDidUpdate(prevProps, prevState, snapshot) {
// 		if (this.props.pathName !== prevProps.pathName) {
// 			this.setState({
// 				currentPage: this.props.pathName.split('/')[1],
// 			})
// 		}
// 	}
// 	updateSearch = evt => {
// 		console.log(this.state.searchQuery)
// 		searchQuery = evt.target.value
// 		this.setState({ searchQuery: evt.target.value })
// 	}
// 	updateFilter = filters => {
// 		catFilter = filters
// 		console.log(catFilter)
// 		this.setState({ catFilter: filters })
// 	}
// 	render() {
// 		return (
// 			<div className='responsiveNav' style={{ opacity: this.props.animation }}>
// 				<Responsive as={Segment} minWidth={1000}>
// 					<div className='navbar'>
// 						<div className='navbarImg'></div>
// 						<div className='container'>
// 							<div className='nav-brand'>JANZART</div>

// 							<div className='nav-end'>
// 								<Link className='login' to='/cart'>
// 									<i className='fas fa-shopping-cart nav-cart'></i>
// 								</Link>
// 								{!isAuthenticated && (
// 									<button
// 										className='login'
// 										onClick={() => this.loginWithRedirect({})}>
// 										Log in
// 									</button>
// 								)}
// 								{isAuthenticated && (
// 									<button className='login' onClick={() => this.logout()}>
// 										Log out
// 									</button>
// 								)}
// 								<Link className='login' to='/signup'>
// 									<div className='signup'>SIGN UP</div>
// 								</Link>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='nav-middle'>
// 						<div className='nav-links'>
// 							<div className='nav-links-inner'>
// 								<Link
// 									name=''
// 									onMouseDown={this.handleLinkClick}
// 									className={`nav-link ${
// 										this.state.currentPage === '' ? 'active' : ''
// 									}`}
// 									to='/'>
// 									HOME
// 								</Link>

// 								<Link
// 									name='new'
// 									onMouseDown={this.handleLinkClick}
// 									className={`nav-link ${
// 										this.state.currentPage === 'new' ? 'active' : ''
// 									}`}
// 									to='/new'>
// 									NEW
// 								</Link>
// 								<Link
// 									name='products'
// 									onMouseDown={this.handleLinkClick}
// 									className={`nav-link ${
// 										this.state.currentPage === 'products' ? 'active' : ''
// 									}`}
// 									to='/products'>
// 									PRODUCTS
// 								</Link>
// 								<Link
// 									name='custom'
// 									onMouseDown={this.handleLinkClick}
// 									className={`nav-link ${
// 										this.state.currentPage === 'custom' ? 'active' : ''
// 									}`}
// 									to='/custom'>
// 									CUSTOM
// 								</Link>
// 								<Link
// 									name='about'
// 									onMouseDown={this.handleLinkClick}
// 									className={`nav-link ${
// 										this.state.currentPage === 'about' ? 'active' : ''
// 									}`}
// 									to='/about'>
// 									ABOUT
// 								</Link>
// 								<Link
// 									name='careers'
// 									onMouseDown={this.handleLinkClick}
// 									className={`nav-link ${
// 										this.state.currentPage === 'careers' ? 'active' : ''
// 									}`}
// 									to='/careers'>
// 									CONTACT
// 								</Link>
// 								<Link
// 									name='careers'
// 									onMouseDown={this.handleLinkClick}
// 									className={`nav-link ${
// 										this.state.currentPage === 'careers' ? 'active' : ''
// 									}`}
// 									to='/careers'>
// 									CAREERS
// 								</Link>
// 							</div>
// 						</div>
// 						<div>
// 							<form className='searchbar'>
// 								<button onClick={this.handleCategories}>
// 									FILTERS <i className='far fa-caret-square-down'></i>
// 								</button>
// 								<input
// 									type='text'
// 									onChange={this.updateSearch}
// 									placeholder='Search for names and filters'
// 								/>
// 								<Link to={`/products/${this.state.searchQuery}`}>
// 									<button type='submit'>
// 										<i className='fas fa-search'></i>
// 									</button>
// 								</Link>
// 							</form>
// 							<Transition
// 								items={this.state.catDisplayed}
// 								from={{
// 									opacity: 0,
// 									position: 'fixed',
// 								}}
// 								enter={{
// 									opacity: 1,
// 									position: 'absolute',
// 								}}
// 								leave={{
// 									opacity: 0,
// 									position: 'fixed',
// 								}}>
// 								{show =>
// 									show &&
// 									(props => (
// 										<CatDropdown onChange={this.updateFilter} style={props} />
// 									))
// 								}
// 							</Transition>
// 						</div>
// 					</div>
// 				</Responsive>
// 				<Responsive as={Segment} maxWidth={1000}>
// 					<div className='mobile-nav'>
// 						<div className='mobile-nav-head'>
// 							<div className='nav-brand'>JANZART</div>
// 							<div className='nav-toggle' onMouseDown={this.handleClick}>
// 								<i className='fas fa-bars'></i>
// 							</div>
// 						</div>

// 						<form className='searchbar'>
// 							<button onClick={this.handleCategories}>
// 								FILTERS <i className='far fa-caret-square-down'></i>
// 							</button>
// 							<input type='text' onChange={this.updateSearch} />
// 							<Link to={`/products/${this.state.searchQuery}`}>
// 								<button type='submit'>
// 									<i className='fas fa-search'></i>
// 								</button>
// 							</Link>
// 						</form>
// 						<Transition
// 							items={this.state.catDisplayed}
// 							from={{
// 								opacity: 0,
// 								position: 'fixed',
// 							}}
// 							enter={{
// 								opacity: 1,
// 								position: 'absolute',
// 							}}
// 							leave={{
// 								opacity: 0,
// 								position: 'fixed',
// 							}}>
// 							{show =>
// 								show &&
// 								(props => (
// 									<CatDropdown onChange={this.updateFilter} style={props} />
// 								))
// 							}
// 						</Transition>
// 					</div>
// 					<Transition
// 						items={this.state.menuDisplayed}
// 						from={{
// 							opacity: 0,
// 							transform: 'translateY(-500px)',
// 							position: 'fixed',
// 						}}
// 						enter={{
// 							opacity: 1,
// 							transform: 'translateY(0px)',
// 							position: 'fixed',
// 						}}
// 						leave={{
// 							opacity: 0,
// 							transform: 'translateY(-500px)',
// 							position: 'fixed',
// 						}}>
// 						{show => show && (props => <Menu style={props} />)}
// 					</Transition>
// 				</Responsive>
// 			</div>
// 		)
// 	}
// }

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

export { searchQuery, catFilter }

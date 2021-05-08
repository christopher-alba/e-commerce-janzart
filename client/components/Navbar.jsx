/* eslint-disable react/display-name */
import React, { Component, useState, useEffect } from 'react'
import { Responsive, Segment, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Transition, animated } from 'react-spring/renderprops'
import CatDropdown from './CatDropdown'
// authentication
import { useAuth0 } from '../react-auth0-spa'

let searchQueryGlobal = ''
let catFilterGlobal = []

export default function Navbar (props) {
  // states
  const [menuDisplayed, setMenuDisplayed] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState('')
  const [catFilter, setCatFilter] = useState([])
  const [catDisplayed, setCatDisplayed] = useState(false)
  // console.log(useAuth0())

  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    loading
  } = useAuth0()
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // update the current page/location of the user
    setCurrentPage(props.pathName.split('/')[1])
  })

  // methods
  function handleClick () {
    setMenuDisplayed(!menuDisplayed)
  }
  function updateSearch (evt) {
    searchQueryGlobal = evt.target.value // to be exported as a global variable
    setSearchQuery(evt.target.value)
  }

  function updateFilter (filters) {
    catFilterGlobal = filters // to be exported as a global variable
    setCatFilter(filters)
  }
  function handleCategories () {
    setCatDisplayed(!catDisplayed)
  }
  function handleLinkClick (evt) {
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
              {isAuthenticated && (
                <Link className='login' to='/profile'>
            Profile
                </Link>
              )}
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
                position: 'fixed'
              }}
              enter={{
                opacity: 1,
                position: 'absolute'
              }}
              leave={{
                opacity: 0,
                position: 'fixed'
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
              position: 'fixed'
            }}
            enter={{
              opacity: 1,
              position: 'absolute'
            }}
            leave={{
              opacity: 0,
              position: 'fixed'
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
            position: 'fixed'
          }}
          enter={{
            opacity: 1,
            transform: 'translateY(0px)',
            position: 'fixed'
          }}
          leave={{
            opacity: 0,
            transform: 'translateY(-500px)',
            position: 'fixed'
          }}>
          {show => show && (props => <Menu style={props} />)}
        </Transition>
      </Responsive>
    </div>
  )
}

class Menu extends Component {
            state = {
              currentPage: ''
            }

            handleLinkClick = evt => {
              this.setState({
                currentPage: evt.target.name
              })

              console.log(evt.target)
            }
            render () {
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

export { searchQueryGlobal, catFilterGlobal }

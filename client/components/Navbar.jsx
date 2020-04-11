import React, { Component } from "react"
import { Responsive, Segment, Transition, List } from "semantic-ui-react"
import { Link } from "react-router-dom"
class Navbar extends Component {
  state = {
    menuDisplayed: false,
    currentPage: "home",
  }

  handleClick = () => {
    this.setState({ menuDisplayed: !this.state.menuDisplayed })
  }
  handleLinkClick = (evt) => {
    this.setState({
      currentPage: evt.target.name,
    })

    console.log(evt.target)
  }
  render() {
    return (
      <div className='responsiveNav'>
        <Responsive as={Segment} minWidth={1000}>
          <div className='navbar'>
            <div className='container'>
              <div className='nav-brand'>JANZART</div>
              <div className='nav-middle'>
                <div>
                  <form className='searchbar' action='/' method='post'>
                    <input type='text' />
                    <button type='submit'>
                      <i className='fas fa-search'></i>
                    </button>
                  </form>
                </div>
                <div className='nav-links'>
                  <Link
                    name='home'
                    onMouseDown={this.handleLinkClick}
                    className={`nav-link ${
                      this.state.currentPage === "home" ? "active" : ""
                    }`}
                    to='/'
                  >
                    HOME
                  </Link>

                  <Link
                    name='new'
                    onMouseDown={this.handleLinkClick}
                    className={`nav-link ${
                      this.state.currentPage === "new" ? "active" : ""
                    }`}
                    to='/products?filter=new'
                  >
                    NEW
                  </Link>
                  <Link
                    name='products'
                    onMouseDown={this.handleLinkClick}
                    className={`nav-link ${
                      this.state.currentPage === "products" ? "active" : ""
                    }`}
                    to='/products'
                  >
                    PRODUCTS
                  </Link>
                  <Link
                    name='custom'
                    onMouseDown={this.handleLinkClick}
                    className={`nav-link ${
                      this.state.currentPage === "custom" ? "active" : ""
                    }`}
                    to='/custom'
                  >
                    CUSTOM
                  </Link>
                  <Link
                    name='about'
                    onMouseDown={this.handleLinkClick}
                    className={`nav-link ${
                      this.state.currentPage === "about" ? "active" : ""
                    }`}
                    to='/about'
                  >
                    ABOUT
                  </Link>
                  <Link
                    name='careers'
                    onMouseDown={this.handleLinkClick}
                    className={`nav-link ${
                      this.state.currentPage === "careers" ? "active" : ""
                    }`}
                    to='/careers'
                  >
                    CAREERS
                  </Link>
                </div>
              </div>
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
        </Responsive>
        <Responsive as={Segment} maxWidth={1000}>
          <div className='mobile-nav'>
            <div className='mobile-nav-head'>
              <div className='nav-brand'>JANZART</div>
              <div className='nav-toggle' onMouseDown={this.handleClick}>
                <i className='fas fa-bars'></i>
              </div>
            </div>

            <form className='searchbar' action='/' method='post'>
              <input type='text' />
              <button type='submit'>
                <i className='fas fa-search'></i>
              </button>
            </form>
            {/* <Transition animation='slide down' duration={500}>
              {this.state.menuDisplayed && <Menu />}
            </Transition> */}
          </div>
          <Transition
            visible={this.state.menuDisplayed}
            animation='slide down'
            duration={500}
          >
            <List.Item>
              <Menu />
            </List.Item>
          </Transition>
        </Responsive>
      </div>
    )
  }
}

class Menu extends Component {
  state = {
    currentPage: "home",
  }

  handleLinkClick = (evt) => {
    this.setState({
      currentPage: evt.target.name,
    })

    console.log(evt.target)
  }
  render() {
    return (
      <div className='nav-menu'>
        <div className='mobile-nav-links'>
          <Link
            name='home'
            onMouseDown={this.handleLinkClick}
            className={`nav-link ${
              this.state.currentPage === "home" ? "active" : ""
            }`}
            to='/'
          >
            HOME
          </Link>

          <Link
            name='new'
            onMouseDown={this.handleLinkClick}
            className={`nav-link ${
              this.state.currentPage === "new" ? "active" : ""
            }`}
            to='/products?filter=new'
          >
            NEW
          </Link>
          <Link
            name='products'
            onMouseDown={this.handleLinkClick}
            className={`nav-link ${
              this.state.currentPage === "products" ? "active" : ""
            }`}
            to='/products'
          >
            PRODUCTS
          </Link>
          <Link
            name='custom'
            onMouseDown={this.handleLinkClick}
            className={`nav-link ${
              this.state.currentPage === "custom" ? "active" : ""
            }`}
            to='/custom'
          >
            CUSTOM
          </Link>
          <Link
            name='about'
            onMouseDown={this.handleLinkClick}
            className={`nav-link ${
              this.state.currentPage === "about" ? "active" : ""
            }`}
            to='/about'
          >
            ABOUT
          </Link>
          <Link
            name='careers'
            onMouseDown={this.handleLinkClick}
            className={`nav-link ${
              this.state.currentPage === "careers" ? "active" : ""
            }`}
            to='/careers'
          >
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
      </div>
    )
  }
}
export default Navbar

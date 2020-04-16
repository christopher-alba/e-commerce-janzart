import React, { Component } from "react"
import { animated } from "react-spring/renderprops"
import { Link } from "react-router-dom"
class Login extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return (
      <animated.div style={{ ...this.props.style }} className='login-page'>
        <div className='signInContainer'>
          <div className='formLogo'>JANZART</div>
          <Link className='formToHome' to='/'>
            <i class='fas fa-home'></i>
          </Link>
          <div className='signInImage'>
            <i className='fas fa-palette'></i>
          </div>
          <div className='signInText'>
            <h1>LOGIN</h1>
            <form className='signInForm' action=''>
              <div>
                <input type='text' placeholder='username' />
              </div>
              <div>
                <input type='text' placeholder='password' />
              </div>
              <div>
                <input type='submit' value='SIGN IN' />
                <Link>SIGN UP</Link>
              </div>
            </form>
          </div>
        </div>
      </animated.div>
    )
  }
}

export default Login

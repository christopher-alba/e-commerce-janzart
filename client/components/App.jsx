import React from "react"
import {
  Route,
  withRouter,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import Product from "./Product"
import Login from "./Login"
import SignUp from "./SignUp"
import Cart from "./Cart"
import Profile from "./Profile"
import Footer from "./Footer"
import Navbar from "./Navbar"
import About from "./About"
import Careers from "./Careers"
import Custom from "./Custom"
import Demo from "./Demo"
import { animated, Transition } from "react-spring/renderprops"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
class App extends React.Component {
  render() {
    return (
      <>
        <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => <Demo animation={opacity} />}
            </Spring>
          )}
        </VisibilitySensor>

        <Route
          path='/'
          render={(props) => {
            if (
              props.location.pathname !== "/login" &&
              props.location.pathname !== "/signup"
            ) {
              return <Navbar />
            }
          }}
        />
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={Product} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/about' component={About} />
        <Route exact path='/custom' component={Custom} />
        <Route exact path='/careers' component={Careers} />
        <Route
          path='/'
          render={(props) => {
            if (
              props.location.pathname !== "/login" &&
              props.location.pathname !== "/signup"
            ) {
              return <Footer />
            }
          }}
        />
      </>
    )
  }
}

export default App

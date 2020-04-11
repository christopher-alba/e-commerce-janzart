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
import { Spring, config } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
class App extends React.Component {
  render() {
    return (
      <>
        <Route
          path='/'
          render={(props) => {
            if (
              props.location.pathname !== "/login" &&
              props.location.pathname !== "/signup"
            ) {
              return (
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring delay={0} to={{ opacity: isVisible ? 1 : 0 }}>
                      {({ opacity }) => (
                        <Navbar animation={opacity} location={props.location} />
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
              )
            }
          }}
        />
        <Route
          exact
          render={({ location, ...rest }) => {
            return (
              <Transition
                native
                items={location}
                keys={location.pathname.split("/")[1]}
                from={{
                  position: "fixed",
                  transform: "translateY(1000px)",
                  opacity: 0,
                }}
                enter={{
                  position: "relative",
                  transform: "translateY(0px)",
                  opacity: 1,
                }}
                leave={{
                  position: "fixed",
                  transform: "translateY(-1000px)",
                  opacity: 0,
                }}
              >
                {(loc, state) => (style) => (
                  <Switch location={state === "update" ? location : loc}>
                    {console.log(style)}
                    <Route
                      exact
                      path='/'
                      render={(props) => <Home style={style} />}
                    />
                    <Route
                      exact
                      path='/products'
                      render={(props) => (
                        <Products style={style} renderProps={props} />
                      )}
                    />
                    <Route
                      exact
                      path='/products?filter=new'
                      render={(props) => (
                        <Products style={style} renderProps={props} />
                      )}
                    />
                    <Route
                      exact
                      path='/products:id'
                      render={(props) => (
                        <Products style={style} renderProps={props} />
                      )}
                    />
                    <Route
                      exact
                      path='/login'
                      render={(props) => <Login style={style} />}
                    />
                    <Route
                      exact
                      path='/signup'
                      render={(props) => <SignUp style={style} />}
                    />
                    <Route
                      exact
                      path='/cart'
                      render={(props) => <Cart style={style} />}
                    />
                    <Route
                      exact
                      path='/profile'
                      render={(props) => <Profile style={style} />}
                    />
                    <Route
                      exact
                      path='/about'
                      render={(props) => <About style={style} />}
                    />
                    <Route
                      exact
                      path='/custom'
                      render={(props) => <Custom style={style} />}
                    />
                    <Route
                      exact
                      path='/careers'
                      render={(props) => <Careers style={style} />}
                    />
                  </Switch>
                )}
              </Transition>
            )
          }}
        />
        <Route
          path='/'
          render={(props) => {
            if (
              props.location.pathname !== "/login" &&
              props.location.pathname !== "/signup"
            ) {
              return (
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring delay={0} to={{ opacity: isVisible ? 1 : 0 }}>
                      {({ opacity }) => <Footer animation={opacity} />}
                    </Spring>
                  )}
                </VisibilitySensor>
              )
            }
          }}
        />
      </>
    )
  }
}

export default App

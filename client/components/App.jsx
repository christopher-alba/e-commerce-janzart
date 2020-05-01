import React from 'react'
import {
  Route,
  withRouter,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Product from './Product'
import Login from './Login'
import SignUp from './SignUp'
import Cart from './Cart'
import Profile from './Profile'
import Footer from './Footer'
import Navbar, { searchQuery } from './Navbar'

import About from './About'
import Careers from './Careers'
import Custom from './Custom'
import Demo from './Demo'
import New from './New'
import PrivateRoute from './PrivateRoute'
import { animated, Transition, Spring, config } from 'react-spring/renderprops'

import VisibilitySensor from 'react-visibility-sensor'
import { useAuth0 } from '../react-auth0-spa'

export default function App () {
  // const { loading } = useAuth0()

  // if (loading) {
  //   return <div>Loading...</div>
  // }
  return (
<>
<Route
  path='/'
  render={props => {
    if (
      props.location.pathname !== '/login' &&
props.location.pathname !== '/signup'
    ) {
      return (
        <VisibilitySensor partialVisibility={true}>
          {({ isVisible }) => (
            <Spring
              delay={0}
              to={{ opacity: isVisible ? 1 : 0 }}
              config={{ duration: 1000 }}>
              {({ opacity }) => (
                <Navbar
                  animation={opacity}
                  pathName={props.location.pathname}
                />
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
<>
<Transition
  native
  items={location}
  keys={location.pathname.split('/')[1]}
  from={{
    position: 'fixed',
    transform: 'translateY(1000px)',
    opacity: 0
  }}
  enter={{
    position: 'static',
    transform: 'translateY(0px)',
    opacity: 1
  }}
  leave={{
    position: 'static',
    transform: 'translateY(-1000px)',
    opacity: 0
  }}
  config={{ duration: 1000 }}>
  {(loc, state) => style => (
    <Switch location={state === 'update' ? location : loc}>
      <Route
        exact
        path='/'
        render={props => <Home style={style} />}
      />
      <Route
        exact
        path='/products'
        render={props => (
          <Products style={style} renderProps={props} />
        )}
      />
      <Route
        exact
        path='/new'
        render={props => (
          <New style={style} renderProps={props} />
        )}
      />
      <Route
        exact
        path='/product/:id'
        render={props => (
          <Product style={style} renderProps={props} />
        )}
      />
      <Route
        exact
        path='/products/:id'
        render={props => (
          <Products style={style} renderProps={props} />
        )}
      />
      <Route
        path='/cart'
        render={props => <Cart style={style} />}
      />
      <Route
        exact
        path='/profile'
        render={props => (
          <PrivateRoute
            path='/profile'
            component={Profile}
            style={style}
          />
        )}
      />

      <Route
        exact
        path='/about'
        render={props => <About style={style} />}
      />
      <Route
        exact
        path='/custom'
        render={props => <Custom style={style} />}
      />
      <Route
        exact
        path='/careers'
        render={props => <Careers style={style} />}
      />
    </Switch>
  )}
</Transition>
<Transition
  native
  items={location}
  keys={location.pathname.split('/')[1]}
  from={{
    position: 'fixed',
    opacity: 0
  }}
  enter={{
    position: 'static',
    opacity: 1
  }}
  leave={{
    position: 'fixed',
    opacity: 0
  }}
  config={{ duration: 2000 }}>
  {(loc, state) => style => (
    <Switch location={state === 'update' ? location : loc}>
      <Route
        exact
        path='/login'
        render={props => <Login style={style} />}
      />
      <Route
        exact
        path='/signup'
        render={props => <SignUp style={style} />}
      />
    </Switch>
  )}
</Transition>
</>
    )
  }}
/>
<Route
  path='/'
  render={props => {
    if (
      props.location.pathname !== '/login' &&
props.location.pathname !== '/signup'
    ) {
      return (
        <VisibilitySensor partialVisibility={true} minTopValue={50}>
          {({ isVisible }) => (
            <Spring delay={0} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <Footer
                  animation={opacity}
                  pathName={props.location.pathname}
                />
              )}
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

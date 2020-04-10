import React from "react"
import { Route, withRouter } from "react-router-dom"

const App = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/products/:id' component={Product} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/profile' component={Profile} />
      <Route path='/' component={Footer} />
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </>
  )
})

export default App

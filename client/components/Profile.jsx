import React, { Fragment, useEffect, useState } from 'react'
import { useAuth0 } from '../react-auth0-spa'
import { animated } from 'react-spring'
import { getToken } from '../api/index'
import ExternalApi from '../api/ExternalApi'
const Profile = props => {
  const { loading, user } = useAuth0()
  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <animated.div style={props.style}>
      <img src={user.picture} alt='Profile' />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* <ExternalApi id={user.sub} /> */}
    </animated.div>
  )
}

export default Profile

import React, { Fragment, useEffect, useState } from 'react'
import { useAuth0 } from '../react-auth0-spa'
import { animated } from 'react-spring'
import { getToken } from '../api/index'
import ExternalApi from '../api/ExternalApi'
const Profile = props => {
	const { loading, user } = useAuth0()
	const [token, setToken] = useState()

	function displayToken() {
		getToken().then(res => {
			console.log(res)

			setToken(res.access_token)
		})
	}
	if (loading || !user) {
		return <div>Loading...</div>
	}

	return (
		<animated.div style={props.style}>
			<img src={user.picture} alt='Profile' />
			<h2>{user.name}</h2>
			<p>{user.email}</p>
			<code>{JSON.stringify(user, null, 2)}</code>
			<button onClick={displayToken}>GET TOKEN</button>
			<h1>{token && token}</h1>
			<ExternalApi id={user.sub} />
		</animated.div>
	)
}

export default Profile

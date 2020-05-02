import React, { useState } from 'react'
import { useAuth0 } from '../react-auth0-spa'
import request from 'superagent'
import { getToken } from './index'
const ExternalApi = (props) => {
  const [showResult, setShowResult] = useState(false)
  const [apiMessage, setApiMessage] = useState('')
  const { getTokenSilently } = useAuth0()
  console.log(props.id)

  const callApi = async () => {
    try {
      getToken()
        .then(res => {
          console.log(res)

          request.get(`https://dev-p2szhd1r.au.auth0.com/api/v2/users/${props.id}`)
            .set({ Authorization: `Bearer ${res.access_token}` })
            .then(responseData => {
              console.log(responseData)

              setShowResult(true)
              setApiMessage(responseData.body)
            })
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
        <>
            <h1>External API</h1>
            <button onClick={callApi}>Ping API</button>
            {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
        </>
  )
}

export default ExternalApi

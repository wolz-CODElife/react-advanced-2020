import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('Default User')

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((resp) => {
        if(resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        }
        else{
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const {login} = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
      })
  }, [])

  if(isLoading) {
    return (
      <div>
        <h2>loading . . .</h2>
      </div>
    )
  }
  if(isError) {
    return (
      <div>
        <h2>Error found</h2>
      </div>
    )
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;

import React from 'react'

const UserGreeting = (props) => {
  if(props.IsLoggedIn){
    return <h1>Welcome {props.username}</h1>
  }
    return <h1>Please login</h1>
}

export default UserGreeting
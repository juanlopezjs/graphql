import React from 'react'
import {graphql} from 'react-apollo'
import gpl from 'graphql-tag'

const query = gpl`{
  allUsers{
    username
  }
}`;
const userItem = (user, i)=><li key={i}>{user.username}</li>

export default graphql(query)(
  ({data: {allUsers=[], loading}}) =>
      <ul>
        {allUsers.map(userItem)}
      </ul>
)

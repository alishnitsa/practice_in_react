import React from 'react';

const User = (props) => (
   <div>
      <h2>{props.id} user: {props.name}</h2>
      <span>Info: {props.info}</span>
      <span> Cash: {props.cash}</span>
      <input type="text" value={props.name} onChange={props.changeUserName} />
      <button onClick={props.deleteUser}>Delete user</button>
   </div>
)

export { User }
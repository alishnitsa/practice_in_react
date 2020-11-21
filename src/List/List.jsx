import React, { Component } from 'react';
import { User } from '../__User/User.jsx';

class List extends Component {
   state = {
      users: [
         { id: 1, name: 'Ivan', info: 'best friend', cash: 100 },
         { id: 2, name: 'Oleg', info: 'friend', cash: 230 },
         { id: 3, name: 'Lena', info: 'sister', cash: 0 },
         { id: 4, name: 'Masha', info: 'girl friend', cash: 1500 },
         { id: 5, name: 'Igor', info: 'brother', cash: 2000 }
      ],
      listTitle: 'Список пользователей',
      showList: true
   }

   changeUserName = (name, index) => {
      const user = this.state.users[index];
      user.name = name;
      const users = this.state.users;
      users[index] = user;
      this.setState({ users })
   }

   changeShowList = () => {
      this.setState({
         showList: !this.state.showList
      })
   }

   deleteUser = (index) => {
      const users = this.state.users.concat();
      users.splice(index, 1);
      this.setState({ users });
   }

   render() {

      let users = null;
      if (this.state.showList) {
         users = this.state.users.map((user, index) => (
            <User
               key={index}
               id={user.id}
               name={user.name}
               info={user.info}
               cash={user.cash}
               deleteUser={this.deleteUser.bind(this, index)}
               changeUserName={event => this.changeUserName(event.target.value, index)}
            />
         ))
      }

      return (
         <div>
            <h1>{this.state.listTitle}</h1>
            <button onClick={this.changeShowList}>Показать/скрыть</button>
            {users}
         </div>
      )
   }
}

export { List }
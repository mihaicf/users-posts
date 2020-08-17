import React from 'react';
import UserItem from './UserItem'

class UserList extends React.Component{
    
    render() {
        const users = this.props.users;
        const deleteUser = (index) => {
            users.splice(index, 1);
            this.setState(() => {
              return {
                users: users
              }
            })
        }
        return(
            <div className="user-list">
                <h2>User List</h2>
                {
                    users.map((user, index) => {
                        return(
                            <UserItem
                                thumbnailUrl={user.thumbnailUrl}
                                name={user.name}
                                email={user.email}
                                isGoldClient={user.isGoldClient}
                                key={index}
                                deleteUser={() => deleteUser(index)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default UserList;
import React from 'react';

export function UserItem(props) {
    const {thumbnailUrl, name, email, isGoldClient, deleteUser} = props;

    return(
        <div className="user-item">
            <div>
                <img src={thumbnailUrl} alt="thumb"/>
            </div>
            <div>
                <p><strong>{name}</strong></p>
                <p>{email}</p>
                {
                    isGoldClient
                        ? <p> Gold Client</p>
                        : null
                }
                <button onClick={deleteUser}>Remove</button>
            </div>
        </div>
    )
}

export default UserItem;
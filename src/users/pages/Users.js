import React from 'react';

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'tom',
            image: 'url',
            articles: 1
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
import React from 'react';
import { useParams } from 'react-router-dom';
const UserSingle = () => {
    const {userId} = useParams();
    return (
        <div>
            Current user id is {userId}:
        </div>
    );
};

export default UserSingle;
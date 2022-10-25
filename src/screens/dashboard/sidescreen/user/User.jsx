import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentUser } from '../../../../services/UserService';

const User = () => {
    const [ user, setUser ] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getCurrentUser()
          .then(user => {
            setUser(user)
          })
      }, [])

    return (
        <div>
            <h1>{user.firstName}</h1>
        </div>
    );
};

export default User;
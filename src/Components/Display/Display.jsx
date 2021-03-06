//import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Display = ({users}) =>{

    const UsersList =  users.length ? (
        users.sort((a,b)=>a.login.toLowerCase() < b.login.toLowerCase() ?1:-1 ).map((user) =>{
         return(
             <li key={user.id}>
                <Link to={`/${user.login}`}>{user.login}</Link>
            </li>
            )  
        })
    ):
     <p> loading</p>
    
    return(
        <div>
            <Typography variant="h3"> Users</Typography>
            <ul>
                {UsersList}
            </ul>
        </div>
    )
}
export default Display;
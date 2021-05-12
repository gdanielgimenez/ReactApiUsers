import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom'
import styles from './UsersPages.module.css';

const UsersPages = ({users}) => {

const { userId }  = useParams();

const userPage =  users.filter(user => (user.login === userId));
console.log(userPage);
return(        
          <div>
                <Container>
                  
                    <Card>
                        <CardMedia
                            className={styles.media}
                            image={userPage[0].avatar_url} 
                            title="profile"/>
                        <CardContent>
                        <Typography variant="h5" align="left" color="primary">{userPage[0].login}</Typography>      
                        <Typography variant="caption" align="center" color="primary">{userPage[0].url}</Typography>          
                        </CardContent> 
                    </Card>  
                </Container>
              <Link to="/">back home</Link>
          </div>
              );
}
export default UsersPages;
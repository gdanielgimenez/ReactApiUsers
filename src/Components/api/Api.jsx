import axios from 'axios';


const url = 'https://api.github.com/users';

export  const fetchUsers = async () =>{ 
     const { data } = await axios.get(url)
     return data;
    } 



import React, {useState, useEffect} from 'react';
import { fetchUsers } from './Components/api/Api';
import logo from './logo.svg';
import './App.css';

const App =  () => {
useEffect(()=>{
  const fetching = async () =>{
    setUsers(await fetchUsers())
  }
  fetching();
  },[])
const [users,setUsers] = useState([]);
console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;

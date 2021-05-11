import React, {useState, useEffect} from 'react';
import { fetchUsers } from './Components/api/Api';
import { Display } from './Components/index';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
        <div>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Display  users={users}/>
              </Route>
            </Switch>
          </Router>
          
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './Components/header';
import Search from './Components/search';
import './App.css';
import LawerForm from './Components/lawerForm';
import LoginBox from './Components/login';
import Register from './Components/register';
import Answer from './Components/answer';
import LoginRegister from './Components/loginRegister';
import Profile from './Components/profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Search}/>
      <Route path="/lawerForm" component={LawerForm}/>
      <Route path="/login" component={LoginBox}/>
      <Route path="/form" component={Register}/>
      <Route path="/loginRegister" component={LoginRegister}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/answer" component={Answer}/>
    </Router>
      
  );
} 

export default App;

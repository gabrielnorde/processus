import React from 'react';
import Header from './Components/header';
import Search from './Components/search';
import './App.css';
import LawyerForm from './Components/lawyerForm';
import LoginBox from './Components/login';
import Register from './Components/register';
import Answer from './Components/answer';
import ChangeLogin from './Components/changeLogin';
import UpdateLawyerForm from './Components/updateLawyer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Search}/>
      <Route path="/lawyerForm" component={LawyerForm}/>
      <Route path="/login" component={LoginBox}/>
      <Route path="/form" component={Register}/>
      <Route path="/changeLogin" component={ChangeLogin}/>
      <Route path="/answer" component={Answer}/>
      <Route path="/updateLawyerForm" component={UpdateLawyerForm}/>

    </Router>
      
  );
} 

export default App;

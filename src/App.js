import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import ContactList from './Components/ContactList';
import EditContact from './Components/EditContact';
import AddContact from './Components/AddContact';
import Header from './Components/Header';



function App ()  {
 
    return (
      <Router>
        <Route path='/' component={Header}/>
        <Route path='/contacts' component={ContactList}/>
        <Route path='/new_Contact' component={AddContact}/>
        <Route path='/edit/:id' component={EditContact}/>
      </Router>

      );
  }

 
export default App;


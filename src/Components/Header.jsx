import React from 'react';

import {Link} from 'react-router-dom';
const Header = (props) => {
    return (
        <div className="contactApp">
        
        <h1>Contact App</h1>
        <Link to ='/contacts' className="contactList">Contact List</Link>
        <Link to='/new_Contact' className="contactAdd" >Add Contact</Link>
        <h1>This is the contact page</h1>
       
      
           
    </div> );
}


export default Header;
import React, { Component } from 'react';
import Axios from 'axios';
class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            telephone:'',
            email:''
         }
    }

    newContact=()=>{
        Axios.post('http://localhost:4000/new_Contact', {...this.state}).catch(er=>{console.log(er)})
    }
    render() { 
        
        return ( 
            <div className="addContact" >
                <div className="addContactInput">
                <input type="text" placeholder="name" onChange= { (e)=>this.setState( { name:e.target.value})}/>
                <input type="text" placeholder="telephone" onChange= { (e)=>this.setState( { telephone:e.target.value})}/>
                <input type="text" placeholder="email" onChange= { (e)=>this.setState( { email:e.target.value})}/>
                </div>
                <button onClick={this.newContact}>Add</button>
            </div>

         );
    }
}
 
export default AddContact ;
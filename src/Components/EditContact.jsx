import React, { Component } from 'react';
import Axios from 'axios';
class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            telephone:'',
            email:'',
            contact:[]
         }
    }
    componentDidMount(){
        Axios.get('http://localhost:4000/contacts').then(res=>{this.setState({
            contact:res.data
        })
        this.state.contact.map(e=>(e._id===this.props.match.params.id)&&
        this.setState({
            name:e.name,
            telephone:e.telephone,
            email:e.email
        }))})
       
    }
    modifierContact=()=>{
        Axios.put('http://localhost:4000/modify-Contact/'+this.props.match.params.id, {name:this.state.name,telephone:this.state.telephone,email:this.state.email})

    }
    render() { 
        return ( 
            <div className="editContact">
                <div className="editContactInput">
                <input type="text" placeholder="name" value={this.state.name}onChange= { (e)=>this.setState( { name:e.target.value})}/>
                <input type="text" placeholder="telephone" value={this.state.telephone} onChange= { (e)=>this.setState( { telephone:e.target.value})}/>
                <input type="text" placeholder="email"  value={this.state.email}onChange= { (e)=>this.setState( { email:e.target.value})}/>
                </div>
                <button onClick={this.modifierContact}>modifier</button>
            </div>
         );
    }
}
 
export default EditContact;
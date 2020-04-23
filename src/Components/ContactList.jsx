import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contact:[]
         }
    }
    componentDidMount(){
        Axios.get('http://localhost:4000/contacts').then(res=>this.setState({
            contact:res.data
        })).catch(er=>console.log('er'))
    }
    componentDidUpdate(PrevProps,PrevState){
        if(PrevState.contact.length!==this.state.contact){
            Axios.get('http://localhost:4000/contacts').then(res=>this.setState({
                contact:res.data

        })).catch(er=>console.log('er'))

    }
}
    remove=(id)=>{
        Axios.delete('http://localhost:4000/delete-Contact/'+id)
    }
    render() { 
        return ( <div className="contacts" >
                    {this.state.contact.map((el)=> <div  key= {el._id} className="contact">
                        <h2> name : {el.name}</h2>
                        <p>tel : {el.telephone}</p>
                        <p>email : {el.email}</p>
                        <Link to={`/edit/${el._id}`}>modifier</Link>
                        <button onClick={()=>this.remove(el._id)}>supprimer</button>
                    </div>)
                     }

                 </div>
                );
              }
            }
            

 
export default ContactList ;
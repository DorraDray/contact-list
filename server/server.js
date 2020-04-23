const express = require('express')
const {MongoClient, ObjectID} = require('mongodb')
const bodyParser = require('body-parser')
const assert = require('assert')
const cors=require('cors')


const app=express()

app.use(bodyParser.json())
app.use(cors())

const mongo_url='mongodb://localhost:27017'

const dataBase="contact-list"


MongoClient.connect(mongo_url,{ useUnifiedTopology: true },(err,client)=>{
    assert.equal(err,null,'failed connextion to the database')
       
    const db=client.db(dataBase)



    app.post('/new_Contact', (req,res)=>{
        let newContact=req.body
        db.collection('contacts').insertOne(newContact,(err,data)=>{
            if(err) res.send('cant add contact')
            else res.send('contact added')
        })
    })
    
     
    app.get('/contacts',(req,res)=>{
        db.collection('contacts').find().toArray((err,data)=>{
            if(err) res.send('cant fetch contacts')
            else res.send(data)
        })
    })

    app.get('/contact/:id',(req,res)=>{
        let searchedContactId = ObjectID(req.params.id)
        db.collection('contacts').findOne({_id : searchedContactId},(err,data)=>{
            if(err) res.send('cant fetch contact')
            else res.send(data)
        }) 
    })

    app.put('/modify-Contact/:id',(req,res)=>{
        let ContactId = ObjectID(req.params.id)
        let ModifiedContact = req.body
        db.collection('contacts').findOneAndReplace({_id : ContactId},{...ModifiedContact},(err,data)=>{
            if(err) res.send('cant modify contact')
            else res.send('contact modified ')
        })    
    })

    app.delete('/delete-Contact/:id',(req,res)=>{
        let ContacttoremoveId = ObjectID(req.params.id)
        
        db.collection('contacts').findOneAndDelete({_id : ContacttoremoveId},(err,data)=>{
            if(err) res.send('cant delete contact')
            else res.send('contact deleted')
        })    
    })


    

})


app.listen(4000,(err)=>{
    if(err)console.log('server errer')
    else console.log ('server is running on port 4000')
})



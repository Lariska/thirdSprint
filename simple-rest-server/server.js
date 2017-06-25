const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());

var emails= [{subject: "Kill bill", body: "lorem ipsu", isRead: false, id:1},
        {subject: "asdasd", body: "Bad movie2", isRead: false, id:2},
        {subject: "cczx asd", body: "Bad movie3", isRead: false, id:3},
        {subject: "sadasd", body: "Bad movie4", isRead: false, id:4},
        {subject: "asdda    ", body: "Bad movie5", isRead: false, id:5},
        {subject: "sssaaaaad", body: "Bad movie6", isRead: false, id:6},
        {subject: "something meaningfull", body: "Bad movie7", isRead: false, id:7},
        {subject: "lorem ipsum", body: "Bad movie8", isRead: false, id:8},
        {subject: "Kill bill", body: "Bad movie9", isRead: false, id:9},
        {subject: "Kill bill", body: "Bad movie10", isRead: false, id:10},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:11},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:12},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:13},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:14},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:15},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:16},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:17},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:18},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:19},
        {subject: "Kill bill", body: "Bad movie", isRead: false, id:20},];
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// This is my data (one day it will come from database)
// let items = [
//     {id: 8,title: 'Mastering SCSS', price: 78, description: 'bla bla'},
//     {id: 9,title: 'Mastering $', price: 8, description: 'jq bla bla'}
// ];

// let items = [
//            {id: 1, name: 'Carmos', price: 98982, isSelected:false},
//            {id: 2, name: 'Carting', price: 1232, isSelected:false},
//            {id: 3, name: 'Carmupo', price: 4232, isSelected:false},
//            {id: 4, name: 'Carmuk', price: 387, isSelected:false}
//            ];

// *** REST API ***




// LIST
app.get('/item', (req, res) => {
//   setTimeout(()=>res.json(items), 2000);
    res.json(items);
})


// READ
app.get('/item/:id', (req, res) => {
  const id = +req.params.id;
  const item = items.find(currItem => currItem.id === id);
  res.json(item)
})

// DELETE
app.delete('/item/:id', (req, res) => {
  const id = +req.params.id;
  items = items.filter(currItem => currItem.id !== id);
  res.json({msg: 'Deleted'});
})

// CREATE
app.post('/item', (req, res) => {
  const item =  req.body; 
  item.id = findNextId();
  items.push(item);
  res.json({msg: 'Item was added!'});
})

// TODO: UPDATE
app.put('/item', (req, res) => {
  const item =  req.body; 
  items = items.map(currItem => (currItem.id === item.id)? item: currItem);
  res.json({msg: 'Item was updates!'});
})
//////////////////////////////////////email!!
app.get('/emails', (request, response) => { 
//	const productId = +request.params.prdId;
//    const idx = products.findIndex(product => product.id === productId);
//	console.log(`Server Requested to get Product with id: ${productId}`);
    response.json(emails);
});
app.delete('/emails/:email', (req, res) => {
    const selectedEmail = JSON.parse(req.params.email);
    console.log(selectedEmail);
    var savedIdx;
    var selectedValue = null;
    var newEmails = [];
    emails.forEach( ( email , idx ) => {
     if(email.id == selectedEmail.id){
       savedIdx = idx;
     } else newEmails.push(email);
    });
        if( ( savedIdx - 1 ) < 0 ){
            if( (savedIdx + 1) > emails.length){
                selectedValue = null;
                console.log("Nullified SelectedEmail")
            }
            else    selectedValue = savedIdx;
        }
        else{
            selectedValue = savedIdx - 1;
            console.log("changed the SelectedEmail")
        }
//   else{
//     selectedValue = savedIdx;
//     console.log("changed to next email with savedIDx of:" + savedIdx + " and length:" + emails.length)
//   }
       //console.log("selected Email:="+selectedEmail);
       //return {emails:newEmails, selectedEmail:selectedValue};
    emails = newEmails;
    res.json({emails:newEmails, selectedEmailIdx:selectedValue});
})

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})

function findNextId() {
    var maxId = 0;
    items.forEach(item => {
        if (item.id > maxId) maxId = item.id;
    });
    return maxId + 1;
}




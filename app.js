
const express = require('express');
const cors = require('cors')

const app = express()
const port = 3000;

app.use(cors())

app.get('/users', (req, res)=>{
    res.json(users)
})

app.get('/users/:id', (req, res)=>{
    var result = {};
    users.forEach(user => {
        if(user.id == req.params.id){
            result = user;
        }
    })
    res.json(result);
})

app.post('/users',(req, res)=>{
    var user = req.body;
    res.json({success: true, user:user})
})

app.get('/records', (req, res)=>{

})

var users = [
    {
        id:1,
        name:'Balita, Ariel',
        email:'ariel.a.balita@gmail.com',
        avatar:'https://api.adorable.io/avatars/285/ariel.a.balita@gmail.com'
    },
    {
        id:2,
        name: 'Belo, Venus',
        email:'venus.belo.rhi@gmail.com',
        avatar:'https://api.adorable.io/avatars/285/venus.belo.rhi@gmail.com'
    },
    {
        id:3,
        name: 'Quijom, Mark Jhon Paul',
        email:'markjhonpaul.quijom@gmail.com',
        avatar:'https://api.adorable.io/avatars/285/markjhonpaul.quijom@gmail.com'
    },
    {
        id:4,
        name:'Quiocho, Chz',
        email:'fquiocho@centralizedinc.com',
        avatar:'https://api.adorable.io/avatars/285/fquiocho@centralizedinc.com'
    },
    {
        id:5,
        name:'Rivera, Godfrey',
        email:'godofuri76@gmail.com',
        avatar:'https://api.adorable.io/avatars/285/godofuri76@gmail.com'
    },
    {
        id:5,
        name:'Yango, Kris Bernard',
        email:'blitzkris24@gmail.com',
        avatar:'https://api.adorable.io/avatars/285/blitzkris24@gmail.com'
    }
]

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${port}!`));
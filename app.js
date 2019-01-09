
const express = require('express');
const app = express()
const port = 3000;


app.get('/users', (req, res)=>{
    res.json([
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
        }
    ])
})

app.post('/users',(req, res)=>{
    var user = req.body;
    res.json({success: true, user:user})
})

app.get('/records', (req, res)=>{

})

app.listen(process.env.PORT | port, () => console.log(`Example app listening on port ${port}!`));
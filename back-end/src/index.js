const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {register,login} = require('./controllers/userController')
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.post('/signup', register)
app.post('/login', login)
app.get('/', (req,res) => {
  res.send("Server Working")
})

mongoose.connect("mongodb+srv://Adhish-1998-DataBase:vQrIj9jTyDzRssqt@cluster0.af5tq.mongodb.net/E-Commerce",{
    useNewUrlParser: true
}).then(()=>console.log("MongoDb is Connected !!!"))
  .catch(()=>console.log(err))


app.listen(5000,()=>{
    console.log('Running on 5000')
})


// Till 16th Video completed for MERN project
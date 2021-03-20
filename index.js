const express  = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());




const  {getAllusers,storeUser,storeProfileUser,getUserwithprofile,getAllProfileusers} = require('./user/userprofile/controller/controller')


async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/node-newwithprofile', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

connectDB(); 


app.get('/users',getAllusers);
app.post('/store',storeUser);
app.post('/profile',storeProfileUser);
app.get('/userupdatedprofile',getUserwithprofile);
app.get('/userprofile',getAllProfileusers)
app.listen(3070,()=>{
    console.log('app running on 3070');

  })



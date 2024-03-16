const express = require('express');
const cors = require('cors');
const PORT = 3000;
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected"))
.catch(err=>console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user',require('./routes/user_routes'));
app.use('/data',require('./routes/data_routes'));


app.listen(PORT,()=>console.log("Server listening on port: " + PORT));

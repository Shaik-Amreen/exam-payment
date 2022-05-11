require('./database/db');
const express = require("express");
const cors = require("cors");
var app = express();
var student = require('./routes/student.router');
var regsupSubject = require('./routes/regsupSubject.router');
var regsupPayment = require('./routes/regsupPayment.router');

app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
app.get('/',(req,res)=>res.send("working"));
app.listen(4000,()=> console.log("server connected"));
app.use('/studentdetails',student);
app.use('/subjects',regsupSubject);
app.use('/payment',regsupPayment);








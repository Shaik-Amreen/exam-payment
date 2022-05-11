const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const student = new Schema({
    rollno:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    coursename:{type:String,required:true},
    departmentname:{type:String,required:true},
    section:{type:String,required:true},
    year:{type:Number,required:true},
    sem:{type:Number,required:true},
    aadharnumber:{type:Number,required:true,unique:true},
    phonenumber:{type:Number,required:true},
    dateofbirth:{type:Date,required:true},
    fathername:{type:String,required:true},
    mothername:{type:String,required:true},
    mail:{type:String}
    
    }
);
const studentdetails = mongoose.model('studentdetail',student,'studentdetails');
module.exports = studentdetails;








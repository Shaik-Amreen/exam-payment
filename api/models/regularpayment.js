const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const regularstudents = new Schema({
    rollno:{type:String},
    name:{type:String},
    departmentname:{type:String},
    coursename:{type:String},
    year:{type:Number},
    sem:{type:Number},
    paymentmode:{type:String},
    date:{type:Date},
    examname:{type:String},
    enddate:{type:String}
    }
    );
const regularstudent = mongoose.model('regularstudents',regularstudents,'regular');
module.exports = regularstudent



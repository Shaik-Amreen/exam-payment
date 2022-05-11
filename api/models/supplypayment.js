const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const supplystudents = new Schema({
    rollno:{type:String},
    name:{type:String},
    departmentname:{type:String},
    year:{type:Number},
    sem:{type:Number},
    subjectname:{type:String},
    subjectcode:{type:String},
    paymentmode:{type:String},
    enddate:{type:String},
    date:{type:Date},
    coursename:{type:String},
    examname:{type:String}
    }
    );
const supplystudent = mongoose.model('supplystudents',supplystudents,'supply');
module.exports = supplystudent



const mongoose = require("mongoose");
//const dateonly=require("mongoose-dateonly")(mongoose);
const Schema = mongoose.Schema;
const supSchema = new Schema({
    examname:{type:String},
    year:{type:Number},
    sem:{type:Number},
    subjectname:{type:String},
    subjectcode:{type:String},
    department:{type:String},
    enddate:{type:String},
    amount:{type:Number}
});
const supplytable = mongoose.model('supplysubject',supSchema);
module.exports = supplytable;

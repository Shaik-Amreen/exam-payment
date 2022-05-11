const mongoose = require("mongoose");
// const dateonly=require("mongoose-dateonly")(mongoose);
const Schema = mongoose.Schema;
const regSchema = new Schema({
    examname:{type:String},
    year:{type:Number},
    sem:{type:Number},
    subjectname:{type:String},
    subjectcode:{type:String},
    department:{type:String},
    enddate:{type:String},
    amount:{type:Number}  
});
const regulartable = mongoose.model('regularsubject',regSchema);
module.exports = regulartable;


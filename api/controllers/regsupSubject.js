
const regularsubject=require("../models/regularsubject");
const supplysubject=require("../models/supplysubject");
var regularpayment = require('../models/regularpayment');
var supplypayment = require('../models/regularpayment');


//storing of subjects in regular table
exports.storeRegData=(req,res)=>
{  regularsubject.create(req.body,(err) =>{
    if(!err)
    {
        res.send({message:"stored"});
    }
    else
    {
        res.send(err);
    }
}      
)  
};

//storing of subjects in supply table

exports.storeSupData=(req,res)=>
{
      
      supplysubject.create(req.body,(err) =>
        {
            if(!err)
            {
                 res.send({message:"stored"});
            }
            else
            {
                res.send(err);
            }           
        })
   
};

//getting paid  student details from regular payment table and subjects from regular subject table 

exports.getRegData=(req,res)=>
{
   regularsubject.find({examname:req.body.examname},(err,data)=>{
       if(err)
       {
           console.log("error in finding")
        }
        else
        {
            regularpayment.findOne({examname:req.body.examname,rollno:req.body.rollno},(err,doc)=>{
                if(err)
                {
                    console.log("error");
                }
                else  
                {
                   res.send({details:doc,subjects:data})
                }
            })   
        }})
};

//getting paid  student details from supply payment table and subjects from supply subject table 


exports.getSupData=(req,res)=>
{
    supplysubject.find({examname:req.body.examname},(err,data)=>{
        if(err)
        {
            console.log("error in finding")
         }
         else
         {
             supplypayment.findOne({examname:req.body.examname,rollno:req.body.rollno},(err,doc)=>{
                 if(err)
                 {
                     console.log("error");
                 }
                 else  
                 {
                    res.send({details:doc,subjects:data})
                 }
             })   
         }})
};

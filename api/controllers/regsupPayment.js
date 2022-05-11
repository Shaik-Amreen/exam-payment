var regularpayment = require('../models/regularpayment');
var supplypayment = require('../models/supplypayment');

//save payment details in supply table

exports.savesupplystudentdata=(req,res)=>{
    supplypayment.create(req.body,(err,doc) =>{
        if(!err)
        {
            res.send({message:'success'})
        }
        else res.send({message:"error while saving the data"})
    }
)
}


//save payment details in regular  table
exports.savestudentdata=(req,res)=>{
    regularpayment.create(req.body,(err,doc) =>{
    if(!err)
    {
    console.log(req.body.sem,req.body.year)
    if(req.body.sem%2==0){req.body.year=req.body.year+1};if(req.body.sem==2){req.body.sem=1}else if(req.body.sem==1){req.body.sem=2}
    console.log(req.body.sem,req.body.year)
    studentdetails.update({rollno:req.body.rollno},{$set:{year:req.body.year,sem:req.body.sem}},(err,doc)=>{
        if(err)
        {
            console.log("error");
        }
        else  
        {
              res.send({message:"success"})
        }
    })   
    }
    else res.send({message:"error while saving the data"})
}
)
}



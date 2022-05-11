var studentdetails = require('../models/studentdetails');
var regularsubject = require('../models/regularsubject');
var supplysubject = require('../models/supplysubject');


//store student roll numbers
exports.poststudentdata=(req,res)=>{
         m = 0
        for(let i=0;i<req.body.length;i++){
        studentdetails.create(req.body[i],(err)=>{
                m+=1;
                if(m==req.body.length)
                {
                    res.send("successfully saved")
                }

    }
        )
    }
}


// send student details based on roll number

exports.sendstudentdetails=(req,res) =>{
    studentdetails.findOne({rollno:req.body.rollno},(err,doc)=>{
        if(err)
        {
            console.log("error");
        }
        else  
        {
            if(doc != null )
              res.send(doc)
            else res.send("invalid studentid")
        }
    })   
      
}


//send notifications links of regular and supply based on rollno

exports.yearsem=(req,res)=>{
    studentdetails.findOne({rollno:req.body.rollno},(err,doc)=>{
        if(err)
        {
            res.send("error");
        }
        else  
        {  console.log(doc)
             regularsubject.find({year:doc.year,sem:doc.sem},(err,regdata)=>{
                    if(err)
                    {
                        res.send("error in finding")
                     }
                     else
                     {
                         console.log(regdata)
                        regularsubject.find({department:doc.departmentname},(err,data)=>{
                            if(err)
                            {
                                res.send("error in finding")
                            }
                             else
                             { 
                                
                                 data.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                                 regdata.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                                 res.send({message:{regular:regdata,supply:data}})
                             }})
                     }})

            }
    }) 
} 


// send data of particular exam by its name

exports.examdetails=(req,res)=>{
    studentdetails.findOne({rollno:req.body.rollno},(err,doc)=>{
        if(err)
        {
            res.send("error");
        }
        else  
        {  
            if(req.body.type="regular"){
                regularsubject.find({year:doc.year,sem:doc.sem,examname:req.body.examname},(err,regdata)=>{
                    if(err)
                    {
                        res.send("error in finding")
                     }
                     else
                     {  console.log(regdata)
                        res.send({subjects:regdata,student:doc})
                     }})
            }
            else{
                supplysubject.find({department:doc.departmentname,examname:req.body.examname},(err,data)=>{
                    if(err)
                    {
                        res.send("error in finding")
                    }
                     else
                     {  
                         res.send({subjects:data,student:doc})
                     }})
                 }


            }
              
        
    }) 
}  

//update student data

exports.updatestudentdata=(req,res)=>{
    studentdetails.updateOne({rollno:req.body.rollno},{$set:req.body},(err,doc)=>{
        if(err)
        {
            console.log("error");
        }
        else  
        {
            if(doc != null )
              res.send("success")
            else res.send("invalid studentid")
        }
    })   
}

//find students section wise

exports.sectionwise=(req,res) =>{
    studentdetails.find({section:req.body.section},(err,doc)=>{
        if(err)
        {
            console.log("error");
        }
        else  
        {
            if(doc != null )
              res.send(doc)
            else res.send("invalid studentid")
        }
    })   
      
}

//find student department wise
exports.departmentwise=(req,res) =>{
    studentdetails.find({department:req.body.department},(err,doc)=>{
        if(err)
        {
            console.log("error");
        }
        else  
        {
            if(doc != null )
              res.send(doc)
            else res.send("invalid studentid")
        }
    })   
      
}

//update year and sem
exports.updatestudentyearsem=(req,res)=>{
    console.log(req.body.sem,req.body.year)
    if(req.body.sem%2==0){req.body.year=req.body.year+1};if(req.body.sem==2){req.body.sem=1}else if(req.body.sem==1){req.body.sem=2}
    console.log(req.body.sem,req.body.year)
    studentdetails.updateOne({rollno:req.body.rollno},{$set:{year:req.body.year,sem:req.body.sem}},(err,doc)=>{
        if(err)
        {
            console.log("error");
        }
        else  
        {
            if(doc != null )
              res.send({message:"success"})
            else res.send("invalid studentid")
        }
    })   
}

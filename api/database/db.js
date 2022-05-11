const mangoose = require("mongoose");
mangoose.connect("mongodb://127.0.0.1:27017/mitspcell",{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if(!err)
            console.log("mangodb connection succeeded")
        else
            console.log("error while coonecting the database(Mongodb)",err)
    })

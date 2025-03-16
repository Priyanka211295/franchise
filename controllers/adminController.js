var {getAdminModel} = require("../models/adminModel");
var AdminColRef = getAdminModel();


function doLogin(req,resp)
{
        console.log(req.body);
        var adminJson=new AdminColRef(req.body);
        adminJson.save().then((document)=>{
                //resp.send(document)
                resp.json({doc:document,status:true,msg:"Saved Successfully with post"});

        }).catch((err)=>{
                console.log(err.message);
                //resp.send(err.message)
                resp.json({status:false,msg:err.message});

        })
}

module.exports={doLogin};
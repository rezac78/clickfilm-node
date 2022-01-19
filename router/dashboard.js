const {Router} = require('express');
const router = new Router();

router.get("/dashboard" ,(req,res)=>{
    res.render("dashboard",{pageTitle:"داشبورد",path:"/dashboard"})
})

module.exports=router;
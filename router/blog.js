const {Router} = require('express');
const router = new Router();

router.get("/",(req,res)=>{
    res.render("home")
})
router.get("/marvel",(req,res)=>{
    res.render("marvel")
})
router.get("/netflex",(req,res)=>{
    res.render("netflex")
})
router.get("/hbo",(req,res)=>{
    res.render("hbo")
})
router.get("/BW",(req,res)=>{
    res.render("BW")
})
router.get("/serial",(req,res)=>{
    res.render("serial")
})
router.get("/film",(req,res)=>{
    res.render("film")
})
router.get("/trailer",(req,res)=>{
    res.render("trailer")
})
router.get("/downlod",(req,res)=>{
    res.render("downlod")
})

module.exports=router;
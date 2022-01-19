const bcrypt = require('bcryptjs');

const passport = require('passport');

const User = require('../models/User');
exports.Login=(req,res)=>{
    res.render("login",{pageTitle:"ورود",path:"/login",message:req.flash("success_msg"),error:req.flash("error")})
}

exports.Register=(req,res)=>{
    res.render("register",{pageTitle:"ثبت نام",path:"/register"})
}

exports.handleLogin = async (req, res, next) => {
    passport.authenticate("local", {
        failureRedirect: "/users/login",
        failureFlash: true
    })(req, res, next)
}

exports.rememberMe = (req, res) => {
    if (req.body.remember) {
        req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000;
    } else {
        req.session.cookie.expire = null;
    }
    res.redirect("/")
}
exports.Register = (req, res) => {
    res.render("register", { pageTitle: "ثبت نام", path: "/login", layout: "./layouts/LoginLayout" })
}

exports.CreateUser= async (req,res)=>{
    const errors=[]
    try {
        await User.userValidation(req.body);
        const {email,password,fullname}=req.body;
        const user = await User.findOne({email})
        if(user){
            errors.push({message:"کاربری با این ایمیل وجود ندارد"})
            return res.render("register",{
                pageTitle:"ثبت نام",
                path:"/login",
                errors,
            })
        }
        const hash = await bcrypt.hash(password,14);
        await User.create({fullname,email,password:hash})
        req.flash("success_msg", "ثبت نام موفقیت امیز بود.")
        res.redirect("/users/login")
    } catch (err) {
        err.inner.forEach((e)=>{
            errors.push({
                name:e.path,
                message:e.message,
            })
        })
        return res.render("register",{pageTitle:"ثبت نام",path:"/register",errors})
    }
}
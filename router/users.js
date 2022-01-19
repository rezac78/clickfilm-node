const {Router} = require('express');
const userController = require('../controllers/userController');
const router = new Router();

router.get("/login",userController.Login);

router.post("/login",userController.handleLogin , userController.rememberMe)

router.get("/register",userController.Register)

router.post("/register",userController.CreateUser);

module.exports=router;
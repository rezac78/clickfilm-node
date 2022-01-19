const path =require('path');

const express = require('express');
const mongoose=require('mongoose');
const passport = require('passport');
const connectdb=require('./config/db');
const dotENV=require('dotenv');
const morgan=require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore =require('connect-mongo')(session);


dotENV.config({path:"./config/config.env"})
connectdb();

require('./config/passport');

const app = express();

if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
}

app.set("view engine","ejs")
app.set("views","views")

app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: process.env.SECRET_NUMBER,
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
    store: new MongoStore({mongooseConnection:mongoose.connection})
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(express.static(path.join(__dirname,"public")))

app.use("/",require('./router/blog'))
app.use("/users", require('./router/users'))
app.use("/dashboard",require('./router/dashboard'))

app.use(require('./controllers/errorsController').get404)

const PORT=process.env.PORT || 8000
app.listen(PORT,()=> console.log(`server running in ${process.env.NODE_ENV} to ${PORT}`))
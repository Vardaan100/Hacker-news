// if(process.env.NODE_ENV !=='production'){
//     require('dotenv').parse();
// }

const express = require('express');;
const app = express();
const expressLayout = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));


const mongoose = require('mongoose');
mongoose.connect('DATABASE_URL', {useNewUrlParser: true ,useUnifiedTopology: true },
()=>{
    console.log("Connnected to Database");
});

app.use('/', indexRouter);
app.listen(process.env.PORT || 3000);

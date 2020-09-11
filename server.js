const express = require('express')
const mongoose = require('mongoose')
//const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const EmployeeRoute = require('./routes/employee')
const AuthRoute = require('./routes/authRoute')


mongoose.connect('mongodb://localhost:27017/tutufdb',
{useNewUrlParser:true, 
    useUnifiedTopology:true}
)

const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("db connected");
})

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');


//app.use(morgan);
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())



const PORT = process.env.PORT || 5000



//for using ejs
// app.get('/', function (req, res) {
//     res.render('home',{user:false});
//  })

// app.get('/api/login',function(req,res){
//     res.render('login',{user:false});
// })

 //calling routes
app.use('/api/employee',EmployeeRoute)
app.use('/api',AuthRoute)





app.listen(PORT,()=>{
    console.log('server running on '+PORT);
})



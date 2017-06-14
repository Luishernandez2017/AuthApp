const express 	 = require("express");//express module
const path		 = require("path");//path module
const bodyParser = require("body-parser");//bp module
const cors		 = require("cors");//cors module
const passport   = require("passport");//passport module
const mongoose   = require("mongoose");//mongoose module


const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

mongoose.connection.on('connected', () =>{
	console.log('Connected to databse ' + config.database);
});

mongoose.connection.on('error', (err) =>{
	console.log('Database error: ' + err);
});
//express server
const app = express();

//Users Route
const users = require('./routes/users');


//port number
const port = 3000;





//CORS Middleware
app.use(cors());


//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());


//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Users route
app.use('/users', users);

//Index route
app.get('/', (reg, res) =>{
	res.send("Invalid Endpoint.")
});

//Serve. listen to port 3000
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
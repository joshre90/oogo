const express = require('express'); //web framework
const connectDB = require('./config/db'); //
const bodyParser = require('body-parser');

const app = express();

//Connect Database
connectDB();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Initiate Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running')); //Get request test

//Define routes
// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 5000; //Server port

// set port, listen for requests
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

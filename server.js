const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT||3000
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body


app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);



// this line is add for comment purpose
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})
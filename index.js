const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/db');
app.use(expressLayouts);

// use express router
app.use('/', require('./routes'));
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set("layout extractScripts", true)

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});



//week 4 manual Authentication 
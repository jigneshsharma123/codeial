const express = require('express');
const port = 4000;
const app = express();
const path = require('path');
//use express Router 
app.use('/', require('./routes'));
//set up the view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));




//no need to disturb the server 
app.listen(port, (err)=> {
    if(err) {
        console.log("error in listening the port:",port);
    }
    console.log(`successfully listen to the https://localhost:${port}`);
});
//end of the server code.
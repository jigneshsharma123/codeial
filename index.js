const express = require('express');
const port = 4000;
const app = express();
//use express Router 
app.use('/', require('./routes'));





//no need to disturb the server 
app.listen(port, (err)=> {
    if(err) {
        console.log("error in listening the port:",port);
    }
    console.log(`successfully listen to the https://localhost:${port}`);
});
//end of the server code.
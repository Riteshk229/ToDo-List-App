const express = require("express");
const app = express();
const port = 3000;

app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }

    console.log(`Server Up an Running on port : ${port}`);
});
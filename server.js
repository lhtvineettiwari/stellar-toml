const express = require("express");
const app = express()
const path = require('path');
const cors = require("cors")
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/.well-known/stellar.toml', (req, res, next) => {
    const options = {
      root: path.join(__dirname, '.well-known'),
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("content-type", "text/plain");
    res.sendFile('stellar.toml', options);
  })

app.listen(3000, ()=>{
    console.log("Srever is running at port 3000");
})
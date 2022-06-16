const express = require("express");
const app = express();
const product = require("./api/product");
const path = require('path');
const cors = require("cors")
app.use(cors())
app.use(express.json({ extended: false }));

app.get("/", (req, res)=>{
    res.json({
        "status":"Live"
    })
})
app.get('stellar.txt', (req, res)=>{
res.sendFile('stellar.txt', root: path.join(__dirname));
})

app.get('/.well-known/stellar.toml', (req, res, next) => {
    const options = {
      root: path.join(__dirname, 'public'),
    }
    res.sendFile('stellar.toml', options);
  })
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

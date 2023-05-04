const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000 ;
const chefData = require("./Data/chef.json")

app.use( cors() )

app.get('/', (req, res)=>{
     res.send(chefData)
})

app.listen(port, ()=>{
     console.log('server is running on port 5000');
})

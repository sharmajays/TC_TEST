const express = require('express')
const dbCon = require('./dbCon')
const bodyParser = require('body-parser')
const api = require('./api')
const app = express()

app.use(bodyParser.json())
app.use("/api", api)

app.listen(3000,()=>{
    console.log('server started')
    try{
        dbCon.connect()
        console.log("DB CONNECTED")
    }
    catch(e){
        console.log(`DB CONNECTION FAILED ERR: ${e}`)
    }
})
const { Router } = require('express')
const dbCon = require('./dbCon')
const { query } = require('./dbquery')

const api = Router()

api.get('/fetch',(req,res)=>{

    const { pageNo, filter } = req.body
    const dbQuery = query(filter)
    console.log(dbQuery)

    dbCon.query(dbQuery, (err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send("FAILED TO FETCH DATA")
        }
        else{
            if(result?.length){
                const pages = Math.ceil(result.length / 10)
                const output = {
                    "currentPage": pageNo > pages ? 1 : pageNo,
                    "pageSize": 10,
                    "totalPages": pages,
                    "totalCount": result.length,
                    "data": pageNo > pages ?
                    result.splice(0, 10) :
                    result.splice(10*(pageNo -1), (result.length < pageNo*10 ? result.length : pageNo*10))
                  }
                res.status(200).send(output)
            }
            else{
                res.send(200).send("TABLE EMPTY")
            }
        }
    })    
})



module.exports = api
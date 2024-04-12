const mysqlDB = require('mysql2')

const dbCon = mysqlDB.createConnection({
    database: 'conqtvms_dev',
    host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
    port: 3306,
    password: 'NoTeDeSt^C10.6?SxwY882}',
    user: 'admin'
})

module.exports = dbCon
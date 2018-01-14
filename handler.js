var mysql = require('mysql')
var myconf = require('./config.json')

//var pool = mysql.createPool({
//    connectionLimit: 100, //important
//    host: myconf.host,
//    user: myconf.user,
//    password : myconf.password,
//    database: myconf.database,
//    debug: false
//})

class Handle {
    constructor(req,res){
        this.req = req
        this.res = res

        this.pool = mysql.createPool({
            connectionLimit: 100, //important
            host: myconf.host,
            user: myconf.user,
            password : myconf.password,
            database: myconf.database,
            debug: false
        })

        this.database_cvinfos = this.database_cvinfos.bind(this)
        this.mysql_real_escape_string = this.mysql_real_escape_string.bind(this)
    }

    mysql_real_escape_string(str) {
        return str.replace(/["'\\\%]/g, function (char) {
            switch (char) {
                case "\"":
                case "'":
                case "\\":
                case "%":
                    return "\\"+char  // prepends a backslash to backslash, percent,
                    // and double/single quotes
            }
        }) 
    }

    database_cvinfos(){
        this.pool.getConnection((err, connection) => {
            if (err){
                this.res.json({"code": 100, "status" : "error in connection database"})
                return
            }


            let sql= `select * from ${this.req.params.table} WHERE id=1`

            connection.query(sql, (err,rows) => {
                console.log(rows)
                connection.release()
                if(!err){
                    this.res.json(rows)
                }
            })

            connection.on('error', (err) => {
                this.res.json({"code": 100, "status": "error in connection database"})
                return
            })
        })
    }


}

module.exports = Handle

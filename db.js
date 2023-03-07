const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/library')
            .then(client => {
                dbConnection = client.db()
                console.log("Connected to database")
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}
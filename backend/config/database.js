const mongoose = require('mongoose')
const MONGOURL = process.env.MONGOURL

const connect = () => {
    mongoose.connect(MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((success) => {
        console.log(`DB is connected to ${success.connection.host}`)
    })
    .catch((error) => {
        console.log(`DB is not connected ${error.message}`)
        process.exit(1)
    })
}
module.exports = connect
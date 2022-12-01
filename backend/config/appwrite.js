const { Client, Account } = require('appwrite')

const client = new Client()
.setEndpoint('http://localhost/v1')
.setProject('6385d6019120b485f57d')

exports.account = new Account(client)

const mongoose = require('mongoose')
const databaseUrl = 'mongodb://192.168.1.43:27017/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl)
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}

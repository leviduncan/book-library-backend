const express = require('express')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')

app.use(cors())

require('dotenv').config()
app.use(express.json())

// Connect Database
connectDB()

const bookRouter = require('./routes/api/booklibrary')
app.use('/api', bookRouter)



const server = app.listen(process.env.PORT || 8800, () => {
  const port = server.address().port
  console.log(`Server running on port: ${port}`);
})
const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./config/database')
const cors = require('cors')
const feedbackRoutes = require('./routes/feedBackroutes')



PORT = process.env.PORT || 8080

dbConnect()
app.use(cors())
app.use(express.json());
app.use('/api/v1', feedbackRoutes )
 


app.listen(PORT , ()=>{
    console.log(`Server is running at PORT No. ${PORT}`)
})
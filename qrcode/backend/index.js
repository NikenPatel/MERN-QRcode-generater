const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json());
app.use(cors());
const qrRouter = require('./qrcodeRouter')

app.use('/api',qrRouter)

const port = 5000

app.listen(port,()=>{console.log(`Server running on port ${port}`);})
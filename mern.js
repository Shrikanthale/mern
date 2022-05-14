const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connection = require('./db');
connection();

const app = express()

app.use(cors())
app.use(express.json())
app.use(require('./router/route'))


const middleware = (req,res,next) => {
    console.log("YOUR IIN MIDDLEWARE")
    next()
}

app.listen(8080,()=>{
    console.log("Run server on Port 8080")
})











// const express = require('express')

// const app = express()
// app.use(express.json())

// const middleware = (req,res,next) => {
//     console.log("In middleware")
//     next()
// }

// app.get('/', (req,res)=>{
//     console.log('your in get request')
//     res.send('your on homepage')
// })

// app.get('/profile',middleware,(req,res)=>{
//     console.log('')
//     res.send('your profile here')
// })

// app.listen(8080,()=>{
//     console.log('Run on 8080')
// })
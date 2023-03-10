const express=require('express')
const{checkoutrouter} = require("./rooter")
const cors =require('cors')
const app = express()
const port =4546
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
    credentials: false,
    optionSuccessStatus:200
}))
app.use ("/",checkoutrouter)
app.listen(port,console.log("serveur connected"))
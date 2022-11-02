const express=require('express')
const cors=require('cors')
const app= express()
const port= process.env.PORT || 5000;

app.use(express.json())
app.cors(cors())

app.get('/',(req,res)=>{
    res.send('genius car server running')
})

app.listen(port, ()=>{
    console.log(`genius car server running in port ${port}` )
})
const express=require('express')
const cors=require('cors')
const app= express()
const port= process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config()
app.use(express.json())
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bahxlpw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
try{
    const serviceCollection = client.db('geniusCar').collection('services')
}
finally{

}

}
run().catch(error=>console.error(error))


app.get('/',(req,res)=>{
    res.send('genius car server running')
})

app.listen(port, ()=>{
    console.log(`genius car server running in port ${port}` )
})
const express = require("express");
const connectDb =require("./DataBase/db")






const PORT = process.env.PORT || 8000 ;
const app = express()
app.use(express.json());




app.get('/', (req,res)=>{
    res.send("hii")

})




connectDb().then(()=>{

    app.listen(PORT, ()=>{
    
        console.log(`listening on port ${PORT}`)
    })
})
const express = require("express");
const connectDb =require("./DataBase/db");
const { addEmployee } = require("./controller/employee");






const PORT = process.env.PORT || 8000 ;
const app = express()
app.use(express.json());




app.get('/', (req,res)=>{
    res.send("hii")

})

app.post("/addEmployee", addEmployee)




connectDb().then(()=>{

    app.listen(PORT, ()=>{
    
        console.log(`listening on port ${PORT}`)
    })
})


























/**
 * 
 * {
    "fullName": "Ram",
 " jobTitle": "front Developer",
  "phoneNumber":9516000016,
  "email":"rrm@gmail.com",
 " addresses": [
     {
   "city":"Bhopal",
   "state":"Madhya Pardesh"
     },
     {
         "city":"Bhopal",
   "state":"Madhya Pardesh"
  }

  ],
  "primaryEmergencyContact": "shyam",
 "emergencyPhoneNumber":9993336633,
  "relationship":"Brother"
} 


{
    "fullName": "John Doe",
    "jobTitle": "Manager",
    "phoneNumber": 5551234 ,
    "email": "johndoe@example.com",
    "addresses": [
        {
            "city": "New York",
            "state": "NY"
        },
        {
            "city": "Los Angeles",
            "state": "CA"
        }
    ],
    "primaryEmergencyContact": "Jane Doe",
    "emergencyPhoneNumber": 5555678,
    "relationship": "Spouse"
}

 */
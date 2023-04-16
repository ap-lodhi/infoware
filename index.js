const express = require("express");
const connectDb =require("./DataBase/db");
const { addEmployee, getEmployee, updateEmployee, deleteEmplyoee } = require("./controller/employee");






const PORT = process.env.PORT || 8000 ;
const app = express()
app.use(express.json());




app.get('/', (req,res)=>{
    res.send("EMPLOYEE DASHBOARD")

})

app.post("/addEmployee", addEmployee)

app.get("/getEmployee", getEmployee)

app.patch("/update/:id", updateEmployee)
app.delete("/delete/:id", deleteEmplyoee)




connectDb().then(()=>{

    app.listen(PORT, ()=>{
    
        console.log(`listening on port ${PORT}`)
    })
})


























/**
 * {
    "fullName": "suraj",
 "jobTitle": "back-end Developer",
  "phoneNumber":6267938362,
  "email":"sk@gmail.com",
 "addresses":"bangalore Madhya Pradesh",
  "primaryEmergencyContact": "hariom",
 "emergencyPhoneNumber":9993733415,
  "relationship":"friend"
} 
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
const express = require("express");
const connectDb =require("./DataBase/db");
const { addEmployee, getEmployee, updateEmployee, deleteEmplyoee, limitEmployee } = require("./controller/employee");






const PORT = process.env.PORT || 8000 ;
const app = express()
app.use(express.json());




app.get('/', (req,res)=>{
    res.send("EMPLOYEE DASHBOARD")

})

app.post("/addEmployee", addEmployee)

app.get("/getEmployee", getEmployee)
app.get("/limitEmployee", limitEmployee)

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


[
  {
    "_id": "61543f3c3a48b32c8d93cb84",
    "fullName": "John Doe",
    "jobTitle": "Software Engineer",
    "phoneNumber": 1234567890,
    "email": "johndoe@example.com",
    "addresses": "123 Main St, Anytown, USA",
    "primaryEmergencyContact": "Jane Doe",
    "emergencyPhoneNumber": 9876543210,
    "relationship": "Spouse",
    "createdAt": "2021-09-29T07:22:04.567Z",
    "updatedAt": "2021-09-29T07:22:04.567Z",
    "__v": 0
  },
  {
    "_id": "61543f3c3a48b32c8d93cb85",
    "fullName": "Jane Smith",
    "jobTitle": "Marketing Manager",
    "phoneNumber": 5551234567,
    "email": "janesmith@example.com",
    "addresses": "456 High St, Anytown, USA",
    "primaryEmergencyContact": "John Smith",
    "emergencyPhoneNumber": 5559876543,
    "relationship": "Spouse",
    "createdAt": "2021-09-29T07:22:04.568Z",
    "updatedAt": "2021-09-29T07:22:04.568Z",
    "__v": 0
  },
  {
    "_id": "61543f3c3a48b32c8d93cb86",
    "fullName": "Bob Johnson",
    "jobTitle": "Sales Representative",
    "phoneNumber": 5555551212,
    "email": "bob@example.com",
    "addresses": "789 Oak St, Anytown, USA",
    "primaryEmergencyContact": "Alice Johnson",
    "emergencyPhoneNumber": 5555552121,
    "relationship": "Spouse",
    "createdAt": "2021-09-29T07:22:04.568Z",
    "updatedAt": "2021-09-29T07:22:04.568Z",
    "__v": 0
  },
  {
    "_id": "61543f3c3a48b32c8d93cb87",
    "fullName": "Alice Williams",
    "jobTitle": "Human Resources Manager",
    "phoneNumber": 5555551234,
    "email": "alice@example.com",
    "addresses": "101 Main St, Anytown, USA",
    "primaryEmergencyContact": "Bob Williams",
    "emergencyPhoneNumber": 5555552345,
    "relationship": "Spouse",
    "createdAt": "2021-09-29T07:22:04.568Z",
    "updatedAt": "2021-09-29T07:22:04.568Z",
    "__v": 0
  },
  {
    "_id": "61543f3c3a48b32c8d93cb88",
    "fullName": "David Lee",
    "jobTitle": "Software Developer",
    "phoneNumber": 5556667777,
    "email": "david@example.com",
    "addresses": "555 Elm St, Anytown, USA",
    "primaryEmergencyContact": "Lisa Lee",
    "emergencyPhoneNumber": 5557778888,
    "relationship": "Spouse",
    "createdAt": "2021-09-29T07:22:04

 */
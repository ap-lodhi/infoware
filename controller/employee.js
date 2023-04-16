
const Employee = require("../DataBase/schema")


async function addEmployee(req,res){
    let {
        fullName,
        jobTitle,
        phoneNumber,
        email,
        addresses,
        primaryEmergencyContact,
        emergencyPhoneNumber,
        relationship
    } =req.body

    const employee = await Employee.findOne({email})
    if(employee){
        return res.send({
            response: 'error',
            message: 'Employee   Already Records'

        })
    }else{
        await Employee.create({
            fullName,
            jobTitle,
            phoneNumber,
            email,
            addresses,
            primaryEmergencyContact,
            emergencyPhoneNumber,
            relationship

        })

        return res.send({
            response: "Success",
            message: "Employee Added"
        })
    }
}



async function getEmployee(req,res){
   const data = await Employee.find()
    console.log(data)
    
  return  res.send(data)
 
}

module.exports={
    addEmployee,
    getEmployee
}
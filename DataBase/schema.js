const mongoose = require("mongoose")


const employeeSchema = mongoose.Schema({
    fullName: String,
  jobTitle: String,
  phoneNumber:Number,
  email:String,
  addresses :String,
  primaryEmergencyContact: String,
  emergencyPhoneNumber:Number,
  relationship:String

},{
    timestamps:true
})

const Employee = mongoose.model("Employees", employeeSchema)
module.exports=Employee;
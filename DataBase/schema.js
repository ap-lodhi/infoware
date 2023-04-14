const mongoose = require("mongoose")


const employeeSchema = mongoose.Schema({
    fullName: String,
  jobTitle: String,
  phoneNumber:String,
  email:String,
  addresses: [{
    city: String,
    state: String
  }],
  primaryEmergencyContact: String,
  emergencyPhoneNumber:String,
  relationship:String

},{
    timestamps:true
})

const Employee = mongoose.model("Tickers", employeeSchema)
module.exports=Employee;
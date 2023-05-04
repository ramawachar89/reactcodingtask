const mongoose = require("mongoose");
const { string } = require("yup");
mongoose.connect("mongodb://127.0.0.1:27017/register-data")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("failed",e);
  });
  //database


  const newSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    guardianName: {
      type: String,
      required: true
    },
    mobile: {
      type: String, // Changed type to String
      required: true
    },
    address: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    },
    nationality: {
      type: String,
      required: true
    },
    dob: {
      type: Number,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    govId: {
      type: String,
      required: true
    },
    emergencyContact: {
      type: Number,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    pincode: {
      type: Number,
      required: true
    },
    religion: {
      type: String,
      required: true
    },
    maritalStatus: {
      type: String,
      required: true
    },
    bloodGroup: {
      type: String,
      required: true
    },
    aadharNo:{
      type:Number,
      required:true
    },
   
  });
  
  const collection = mongoose.model("collection", newSchema);
  module.exports = collection;
  
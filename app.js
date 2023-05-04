

const express = require("express");
const cors = require("cors");
const collection = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/addUser", async (req, res) => {
  const { name, email, guardianName, mobile, address, country,
    occupation, nationality, dob, sex, govId, emergencyContact
    , state, city, pincode, religion, maritalStatus, bloodGroup, aadharNo } = req.body;
  const data = {
    name: name,
    email: email,
    guardianName: guardianName,
    mobile: mobile,
    address: address,
    country: country,
    occupation: occupation,
    nationality: nationality,
    dob: dob,
    sex: sex,
    govId: govId,
    emergencyContact: emergencyContact,
    state: state,
    city: city,
    pincode: pincode,
    religion: religion,
    maritalStatus: maritalStatus,
    bloodGroup: bloodGroup,
    aadharNo: aadharNo
  };
  try {
    await collection.insertMany([data]);
    const allData = await collection.find({});
    res.json(allData);
  } catch (e) {
    res.json("fail");
    console.log(e);
  }
});

app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await collection.find({});
    res.json({ status: "ok", data: allUser });
  } catch (e) {
    console.log(e);
    res.json({ status: "error", message: "Failed to get users" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});

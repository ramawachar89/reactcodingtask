// import React,{useState} from "react";
// import axios from 'axios'
// import { Link } from "react-router-dom";
// import UserList from "./userList";
// export default function Form() {
//   const[name,setName]=useState("")
//   const[email,setEmail]=useState("")
//   const[data,setData]=useState([])
 
//   function inputed(e){
//     setName(e.target.value)
//   }
//   function emailed(e){
//     setEmail(e.target.value)
//   }
//  async function submitted(e){
//     e.preventDefault()
     
//     try{
//         await axios.post("http://localhost:3000/addUser",{
//            name, email
//         }).then(res=>{
//           if(res.data=="fail"){
//             alert("failed")
//           }else{
//             setData(res.data)
//           }
//         })
//     }catch(e){
//         console.log(e)
//     }

//   }
//   return (
//     <div>
      
//     <Link to='/userlist'>GoList</Link>
//      <form action="POST">
//      <input type="text" placeholder="name" value={name} onChange={inputed}/>
//      <input type="text" value={email} placeholder="email"  onChange={emailed}/>
//      <button onClick={submitted}>submit</button>
//      </form>
//      {data.map((e)=>(
//       <p>{e.name}</p>
//      ))}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import * as Yup from 'yup';

// import './form.css'

// export default function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [data, setData] = useState([]);
//   const [errors, setErrors] = useState({});
//   const[mob,setMob]=useState("")

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email"),
    
//   });

//   function inputed(e) {
//     setName(e.target.value);
//     setErrors({...errors, name: ""});
//   }

//   function emailed(e) {
//     setEmail(e.target.value);
//     setErrors({...errors, email: ""});
//   }
//   function mobiled(e){
//     setMob(e.target.value)
//     setErrors({...errors,mob:""})
//   }

//   async function submitted(e) {
//     e.preventDefault();

//     try {
//       await validationSchema.validate({ name, email }, { abortEarly: false });
//       await axios.post("http://localhost:3000/addUser", {
//         name,
//         email,
//       }).then((res) => {
//         if (res.data === "fail") {
//           alert("failed");
//         } else {
//           setData(res.data);
//         }
//       });
//     } catch (error) {
//       if (error instanceof Yup.ValidationError) {
//         const validationErrors = {};
//         error.inner.forEach((err) => {
//           validationErrors[err.path] = err.message;
//         });
//         setErrors(validationErrors);
//       } else {
//         console.log(error);
//       }
//     }
//   }

//   return (//
//     <div className='main'>
//       {/* <Link to="/userlist">GoList</Link> */}
      
//       <div className="left">
//        <h4 style={{marginRight:"16rem",textDecoration:"underline"}}>Personal Details</h4>
       
//       <div className="persondet">
//     Name &nbsp;&nbsp; <input type="text" placeholder="Enter name" value={name} onChange={inputed} className="in"/>
//           {errors.name && <span >{errors.name}</span>}
//     Mobile &nbsp; <input  type="text" placeholder='Enter mobile No' value={mob} onChange={mobiled} className="mob" /><br/>
//           {errors.mob && <span style={{color:"red"}}>{errors.mob}</span>}
//       </div>
//        <div>
//          <h4 style={{marginRight:"16rem",textDecoration:"underline"}}>Contacts Details</h4>

//         </div>
       
//       </div>
//       <div className="middle">
//       <div className="persondetails">
//           <h4>Personal Details</h4>
//           <input type="text" placeholder="name" value={name} onChange={inputed} />
//           {errors.name && <span >{errors.name}</span>}
//           <input type="text" placeholder='mobile No' value={mob} onChange={mobiled}/>
//           {errors.mob && <span style={{color:"red"}}>{errors.mob}</span>}
//         </div>
//         <div>
//           <input type="text" placeholder="email" value={email} onChange={emailed} />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div>
         
//         </div>
//         <button onClick={submitted}>Submit</button>
//       </div>
//       <div className="right">
//       <div className="persondetails">
//           <h3>Personal Details</h3>
//           <input type="text" placeholder="name" value={name} onChange={inputed} />
//           {errors.name && <span >{errors.name}</span>}
//           <input type="text" placeholder='mobile No' value={mob} onChange={mobiled}/>
//           {errors.mob && <span style={{color:"red"}}>{errors.mob}</span>}
//         </div>
//         <div>
//           <input type="text" placeholder="email" value={email} onChange={emailed} />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div>
         
//         </div>
//         <button onClick={submitted}>Submit</button>
//       </div>
 
//     </div>
//   );
// }
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import UserList from "./userList";
import style from './form.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { watch } from "react-hook-form";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  guardianName: Yup.string().required(),
  mobile: Yup.string().min(10).max(10).required(),
  address: Yup.string().required(),
  country: Yup.string().required(),
  occupation: Yup.string().required(),
  nationality: Yup.string().required(),
  dob: Yup.string().min(8).max(8).required(),
  sex: Yup.string().required(),
  govId: Yup.string().required(),
  emergencyContact: Yup.string().min(10).max(10).required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  pincode: Yup.string().required(),
  religion: Yup.string().required(),
  maritalStatus: Yup.string().required(),
  bloodGroup: Yup.string().required(),
  aadharNo:Yup.string().min(12).max(12).required()
});

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [data, setData] = React.useState([]);
  

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post("http://localhost:3000/addUser", formData);
      if (res.data === "fail") {
        alert("failed");
      } else {
        setData(res.data);
        toast("Form is submitted succesfully", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (e) {
      console.log(e);
    }
   
  };
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 
 
const watchGovId = watch("govId");
  return (
    <>
    <ToastContainer/>
   <button className={style.btn} > <Link to="/userlist">GoToUserList</Link></button>
    <div className={style.main}>
      
      <div className={style.left}>
        <div className={style.person}>
    <h4 style={{marginRight:"20rem",textDecoration:"underline"}}>Personal Details</h4>
    Name<input type="text" {...register("name")} placeholder="Name" className={style.in}/><br/>
        {errors.name && <span>{errors.name.message}</span>}<br/>
   Mobile &nbsp;&nbsp;<input type="number" {...register("mobile")} placeholder="Mobile" className={style.mob}/><br/>
        {errors.mobile && <span>{errors.mobile.message}</span>}
        </div>
        <div>
          <h4 style={{marginRight:"20rem",textDecoration:"underline"}}>Contact Details</h4>
         Gurdian Details   &nbsp; <input
          type="text"
          {...register("guardianName")}
          placeholder="Guardian Name"
          className={style.gur}
        /><br/>
        {errors.guardianName && <span>{errors.guardianName.message}</span>}

        </div>
        <div>
          <h4 style={{marginRight:"20rem",textDecoration:"underline"}}>Address Details</h4>
          
        Address &nbsp; &nbsp;<input type="text" {...register("address")} placeholder="Address" className={style.add} /><br/>
        {errors.address && <span>{errors.address.message}</span>}

      <div> Country &nbsp;&nbsp; <select
  {...register("country")}
  className={style.country}
>
  <option value="">Select country</option>
  <option value="India">India</option>
  <option value="USA">USA</option>
  <option value="UK">UK</option>
  <option value="Canada">Canada</option>
  <option value="Australia">Australia</option>
  <option value="Other">Other</option>
</select><br/>
        {errors.country && <span>{errors.country.message}</span>}</div>
        </div>
        <div>
          <h4 style={{marginRight:"21rem",textDecoration:"underline"}}>Other Details</h4>
         Occupation&nbsp; <select
          type="text"
          {...register("occupation")}
          placeholder="Occupation"
          className={style.occ}
        >
          <option value="">Select Occupation</option>
    <option value="doctor">doctor</option>
    <option value="engineer">engineer</option>
    <option value="teacher">teacher</option>
    <option value="lawyer">lawyer</option>
    <option value="artist">artist</option>
    <option value="writer">writer</option>
    <option value="entrepreneur">Entrepreneur</option>
    <option value="Other">Other</option>
          </select><br/>
        {errors.occupation && <span>{errors.occupation.message}</span>}<br/>

        Nationality &nbsp;&nbsp;<select
          type="text"
          {...register("nationality")}
          placeholder="Nationality"
          className={style.nat}
        >
          <option value="">Select Nationality</option>
          <option value="Indian">Indian</option>
          <option value="Other">Other</option>
          </select><br/>
        {errors.nationality && <span>{errors.nationality.message}</span>}
        </div>
      </div>
      
      <div className={style.middle}>
   <div className={style.dob}>
   Date of Birth<input type="number" {...register("dob")} placeholder="Date of Birth@DDMMYYYY" className={style.date}/><br/>
        {errors.dob && <span>{errors.dob.message}</span>}
     <div> Govt issue ID   <select
          type="text"
          {...register("govId")}
          placeholder="Government ID"
          className={style.govid}
          >
          <option value="">select ID Card</option>
          <option value="Aadhar Card">Aadhar Card</option>
          <option value="Pan Card">Pan Card</option>
            </select><br/>
          {errors.govId && <span>{errors.govId.message}</span>}</div>
          {watchGovId === "Aadhar Card" && (
    <div>
      Aadhar Card No.:
      <input
        type="number"
        {...register("aadharNo")}
        placeholder="Enter Aadhar Card No."
        className={style.input}
      />
      {errors.aadharNo && <span>{errors.aadharNo.message}</span>}
      
    </div>
  )}
     {watchGovId === "Pan Card" && (
    <div>
      Pan Card No.:
      <input
        type="text"
        {...register("panNo", {
          required: "Pan card no. is required",
          pattern: {
            value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
            message: "Invalid PAN card no.",
          },
        })}
        placeholder="Enter Pan Card No."
        className={style.input}
      />
      {errors.panNo && <span>{errors.panNo.message}</span>}
    </div>
  )}
   </div>
   <div className={style.email}>
   Email<input type="text" {...register("email")} placeholder="Email" className={style.emailinp} /><br/>
        {errors.email && <span>{errors.email.message}</span>}
   </div>
   <div className={style.state}>
    State &nbsp;&nbsp;&nbsp;&nbsp;<select type="text" {...register("state")} placeholder="State" className={style.states}>
    <option value="">Select state</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
      </select><br/>
          {errors.state && <span>{errors.state.message}</span>}
     <div> Pincode &nbsp;<input type="text" {...register("pincode")} placeholder="Pincode"className={style.pin} /><br/>
          {errors.pincode && <span>{errors.pincode.message}</span>}</div>
   </div>
   <div className={style.religion}>
    
   Religion&nbsp;<select type="text" {...register("religion")} placeholder="Religion" className={style.rel}>
    <option value="">Select Religion</option>
    <option value="Hinduism">Hinduism</option>
    <option value="Buddhism">Buddhism</option>
    <option value="Sikhism">Sikhism</option>
    <option value="Christianity">Christianity</option>
    <option value="Islam">Islam</option>
    <option value="Judaism">Judaism</option>
    <option value="Other">Other</option>
    </select><br/>
          {errors.religion && <span>{errors.religion.message}</span>}
     <div>  Marital&nbsp;   <select
            type="text"
            {...register("maritalStatus")}
            placeholder="Marital Status"
            className={style.mar}
          >
            <option value="">Select maritalStatus</option>
            <option value="married">married</option>
            <option value="single">single</option>
            <option value="divorced">divorced</option>
            </select><br/>
          {errors.maritalStatus && <span>{errors.maritalStatus.message}</span>}</div>
   </div>
      </div>
      <div className={style.right}>
<div className={style.gender}>
Gender&nbsp;<select type="text" {...register("sex")} placeholder="Enter gender" className={style.gen}><br/>
<option  value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
</select><br/>
        {errors.sex && <span>{errors.sex.message}</span>}
        </div>
        <div className={style.emergency}>
      <div>Phone &nbsp; <input
            type="number"
            {...register("emergencyContact")}
            placeholder="Emergency Contact"
            className={style.eme}
          /><br/>
          {errors.emergencyContact && (
            <span>{errors.emergencyContact.message}</span>
          )}</div> 
        </div>
        <div className={style.cities}>
        City<input type="text" {...register("city")} placeholder="City" className={style.city} /><br/>
          {errors.city && <span>{errors.city.message}</span>}
        </div>
        <div className={style.bloodgroup}>
       Blood <select
  {...register("bloodGroup")}
  className={style.blood}
>
  <option value="">Select blood group</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
</select><br/>
          {errors.bloodGroup && <span>{errors.bloodGroup.message}</span>}
        
        </div>
        <div className={style.submit}>  <button type="submit" onClick={handleSubmit(onSubmit)} className={style.button}>Submit</button></div>
        
      </div>
    </div>
    </>
  )
        }      



import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import 'datatables.net-dt/css/jquery.dataTables.css';
import style from './userList.module.css'

export default function UserList() {
  const [users, setUsers] = useState([]);
  const dataTableRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/getAllUser");
        if (response.data.status === "ok") {
          setUsers(response.data.data);

          $(document).ready(function () {
            $('#myTable').DataTable();
          });
          // if (dataTableRef.current) {
          //   $(dataTableRef.current).DataTable({
          //     searching: true,
          //     dom: 'ft'
          //   });
          // }
          // if (!$.fn.DataTable.isDataTable('#myTable')) {
          //   $('#myTable').DataTable();
          // }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <button className={style.button}><Link to="/">GoBack</Link></button>
      <table id='myTable' ref={dataTableRef} border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>mobile</th>
            <th>Address</th>
            <th>Aadhar Number/Pan Number</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Religion</th>
            <th>Marital Status</th>
            <th>Blood Group</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>{user.aadharNo}</td>
              <td>{user.dob}</td>
              <td>{user.sex}</td>
              <td>{user.religion}</td>
              <td>{user.maritalStatus}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.state}<br />{user.country}<br />{user.pincode}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




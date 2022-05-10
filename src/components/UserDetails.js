import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/details.css";

function UserDetails() {
  const [data, setData] = useState([]);

  const loadData = () => {
    axios
      .get("http://localhost:5000/details/")
      .then((response) => {
        console.log(response.data);
        console.log(data.length);
        if (data.length == 0) {
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  function logout() {
    localStorage.clear();
    window.location = "/";
  }
  return (
    <>
      <div className="topRow">
        <button onClick={logout} className="logout-button">
          LogOut
        </button>
      </div>
      <div className="heading"> Employee Data</div>
      <div className="dataRow">
        <table className="data-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Image</th>
              <th>Bank</th>
              <th>Branch</th>
            </tr>

            {data.map((user) => {
              return (
                <tr>
                  <td>{user.empName}</td>
                  <td>{user.empAddress}</td>
                  <td>
                    <img
                      height="70"
                      width="70"
                      src={"http://localhost:5000/" + user.empPhoto}
                    ></img>
                  </td>
                  <td>{user.bank}</td>
                  <td>{user.branch}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserDetails;

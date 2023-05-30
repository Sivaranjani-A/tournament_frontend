import React, { useEffect, useState } from "react";
import axios from "axios";
import TournamentList from "./TournamentList";
import { config } from "../../config/config";
import { Link } from "react-router-dom";

function Tournament() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  let getList = async () => {
    try {
      const users = await axios.get(`${config.api}/tournament/getAll`);
      console.log(users);
      setdata(users.data);
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteTournament = async (id) => {
    const confirm = window.confirm("Do you want to delete this record?");

    if (confirm) {
      await axios.delete(`${config.api}/tournament/${id}`);
      getList();
    }
  };

  return (
    <div className="card shadow mb-4 m-3">
      <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
        <h6 className="m-0 font-weight-bold text-primary">Tournament List</h6>
        <Link className="btn btn-outline-success" to="/addtournament">
          Add Tournament
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Participant List</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dt, index) => (
                <TournamentList
                  key={index}
                  data={dt}
                  deletetournament={DeleteTournament}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tournament;

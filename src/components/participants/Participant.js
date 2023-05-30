import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../config/config";
import { Link, useParams } from "react-router-dom";
import ParticipantList from "./Participantlist";

function Participant() {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  let getList = async () => {
    try {
      const users = await axios.get(`${config.api}/participant/getAll/${id}`);

      setdata(users.data);
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteParticipant = async (id) => {
    const confirm = window.confirm("Do you want to delete this record?");

    if (confirm) {
      await axios.delete(`${config.api}/participant/${id}`);
      getList();
    }
  };

  return (
    <div className="card shadow mb-4 m-3">
      <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
        <h6 className="m-0 font-weight-bold text-primary">Participant List</h6>
        <Link className="btn btn-outline-success" to="/">
          TournamentList
        </Link>
        <Link className="btn btn-outline-success" to={`/addparticipant/${id}`}>
          Add Participant
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
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dt, index) => (
                <ParticipantList
                  key={index}
                  data={dt}
                  deleteparticipant={DeleteParticipant}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Participant;

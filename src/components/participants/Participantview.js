import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { config } from "../../config/config";

function Participantview() {
  const params = useParams();
  const navigate = useNavigate();
  function Back() {
    navigate(-1);
  }
  const [details, setData] = useState([]);
  useEffect(() => {
    getuser();
  }, []);

  let getuser = async () => {
    try {
      const users = await axios.get(`${config.api}/participant/${params.id}`);
      setData(users.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container py-5 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col col-xl-9">
          <h2 className="m-auto" style={{ textAlign: "center" }}>
            PARTICIPANT DETAILS
          </h2>
          <div className="card m-auto mt-3" style={{ width: "30rem" }}>
            <div className="card-header text-center text-uppercase">
              <strong>{details.name}</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name : {details.name}</li>
              <li className="list-group-item">Email : {details.email}</li>
              <li className="list-group-item">Contact : {details.contact}</li>
            </ul>
          </div>
          <div className="d-sm-flex  justify-content-end mt-3">
            <button
              onClick={() => Back()}
              className="btn btn-sm btn-primary shadow-sm "
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participantview;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from "../../config/config";

function Tournamentview() {
  const params = useParams();
  const [details, setData] = useState([]);
  useEffect(() => {
    getevent();
  }, []);

  let getevent = async () => {
    try {
      const users = await axios.get(`${config.api}/tournament/${params.id}`);
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
            Tournament DETAILS
          </h2>
          <div className="card m-auto mt-3" style={{ width: "30rem" }}>
            <div className="card-header text-center text-uppercase">
              <strong>{details.tournament_name}</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Name : {details.tournament_name}
              </li>
              <li className="list-group-item">
                StartDate : {details.startDate}
              </li>
              <li className="list-group-item">EndDate : {details.endDate}</li>
            </ul>
          </div>
          <div className="d-sm-flex  justify-content-end mt-3">
            <Link to="/" className="btn btn-sm btn-primary shadow-sm ">
              BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tournamentview;

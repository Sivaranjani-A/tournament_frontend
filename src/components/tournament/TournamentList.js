import React from "react";

import { Link } from "react-router-dom";

function TournamentList({ data, deletetournament }) {
  return (
    <>
      <tr>
        <td>{data.tournament_name}</td>
        <td>{data.startDate}</td>
        <td>{data.endDate}</td>
        <td>
          <Link
            className="btn btn-warning btn-sm me-1"
            to={`/participant/${data._id}`}
          >
            ParticipantList
          </Link>
        </td>
        <td>
          <Link
            className="btn btn-success btn-sm me-1"
            to={`/tournamentview/${data._id}`}
          >
            view
          </Link>
          <Link
            className="btn btn-info btn-sm me-1"
            to={`/tournamentedit/${data._id}`}
          >
            Edit
          </Link>
          <button
            className="btn  btn-sm me-1 btn-danger"
            onClick={() => deletetournament(data._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TournamentList;

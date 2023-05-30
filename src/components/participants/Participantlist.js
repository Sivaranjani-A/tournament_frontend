import React from "react";

import { Link } from "react-router-dom";

function ParticipantList({ data, deleteparticipant }) {
  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.contact}</td>

        <td>
          <Link
            className="btn btn-success btn-sm me-1"
            to={`/participantview/${data._id}`}
          >
            view
          </Link>
          <Link
            className="btn btn-info btn-sm me-1"
            to={`/participantedit/${data._id}`}
          >
            Edit
          </Link>
          <button
            className="btn  btn-sm me-1 btn-danger"
            onClick={() => deleteparticipant(data._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default ParticipantList;

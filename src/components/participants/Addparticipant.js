import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import axios from "axios";
import { config } from "../../config/config";
const formvalidationSchema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().email().required(),
  contact: yup.number().required().min(10),
});

function Addparticipant() {
  const [isLoading, setLoading] = useState(false);
  const params = useParams();

  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post(
          `${config.api}/participant/create/${params.id}`,
          values
        );
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      navigate(-1);
    },
  });

  return (
    <>
      <form className="container" onSubmit={myFormik.handleSubmit}>
        <div className="row mt-4 ps-5">
          <div className="col-lg-5  mt-5 m-auto">
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.name && myFormik.errors.name
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.name}
              name="name"
              placeholder="Enter Participant Name"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.name && myFormik.errors.name
                ? myFormik.errors.name
                : null}
            </span>
            <br />
            <input
              type="email"
              className={`form-control ${
                myFormik.touched.email && myFormik.errors.email
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.email}
              name="email"
              placeholder="Enter email"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.email && myFormik.errors.email
                ? myFormik.errors.email
                : null}
            </span>
            <br />
            <input
              type="number"
              className={`form-control ${
                myFormik.touched.contact && myFormik.errors.contact
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.contact}
              name="contact"
              placeholder="Enter contact"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.contact && myFormik.errors.contact
                ? myFormik.errors.contact
                : null}
            </span>

            <br />
            <div className="d-sm-flex  justify-content-end mt-3">
              <button
                disabled={isLoading}
                type="submit"
                className="btn btn-primary create-btn"
              >
                {isLoading ? "isLoading" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Addparticipant;

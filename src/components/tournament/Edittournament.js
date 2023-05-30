import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import axios from "axios";
import { config } from "../../config/config";
const formvalidationSchema = yup.object({
  tournament_name: yup.string().required().min(4),
  startDate: yup.date().required(),
  endDate: yup.date().required(),
});

function Edittournament() {
  const [isLoading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    getList();
  }, []);

  let getList = async () => {
    try {
      const details = await axios.get(`${config.api}/tournament/${params.id}`);
      myFormik.setValues(details.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      tournament_name: "",
      startDate: "",
      endDate: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        setLoading(true);
        await axios.put(`${config.api}/tournament/${params.id}`, values);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      navigate("/");
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
                myFormik.touched.tournament_name &&
                myFormik.errors.tournament_name
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.tournament_name}
              name="tournament_name"
              placeholder="Enter Tournament Name"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.tournament_name &&
              myFormik.errors.tournament_name
                ? myFormik.errors.tournament_name
                : null}
            </span>
            <br />
            <input
              type="date"
              className={`form-control ${
                myFormik.touched.startDate && myFormik.errors.startDate
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.startDate}
              name="startDate"
              placeholder="Enter start Date"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.startDate && myFormik.errors.startDate
                ? myFormik.errors.startDate
                : null}
            </span>
            <br />
            <input
              type="date"
              className={`form-control ${
                myFormik.touched.endDate && myFormik.errors.endDate
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.endDate}
              name="endDate"
              placeholder="Enter end Date"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.endDate && myFormik.errors.endDate
                ? myFormik.errors.endDate
                : null}
            </span>

            <br />
            <div className="d-sm-flex  justify-content-end mt-3">
              <button
                disabled={isLoading}
                type="submit"
                className="btn btn-primary create-btn"
              >
                {isLoading ? "isLoading" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Edittournament;

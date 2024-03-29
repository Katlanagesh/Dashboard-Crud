import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Color from "./Color";
import Footer from "./Footer";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        {/* <Link */}
        {/* to="/Users" */}
        <div className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i
            className="fas fa-download fa-sm text-white-50"
            onClick={() => history.push("/Users")}
          >
            Generate Report
          </i>
        </div>
        {/* </Link> */}
      </div>
      <Card1/>
      <div class="row">
        <Card/>
       
      </div>
      <div className="row">
        <Color/>
       
      </div>
    </>
  );
}

export default Dashboard;
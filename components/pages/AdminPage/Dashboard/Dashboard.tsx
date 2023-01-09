import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Table from "../../../shared/SharedTable/Table";
import MyProfile from "../../MyProfile/MyProfile";
import Login from "../Login/Login";
import AdminDetailsSummary from "./AdminDetailsSummary/AdminDetailsSummary";
import Styles from "./Dashboard.module.css";

interface Props { }

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="flex-1 overflow-y-scroll">
      <MyProfile />
      <Table />
      <Login />
      <AdminDetailsSummary />
    </div>
  );
};

export default Dashboard;
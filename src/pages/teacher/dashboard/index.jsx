import React from "react";
import { useHeading } from "../../../hooks";

function TeacherDashboard() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Dashboard");
  setSubheading("This is the place where you can manage your assesments");

  return <div>dashboard</div>;
}

export default TeacherDashboard;

import React from "react";
import Student from "./student";
import "./student.css";
function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>
      <Student name="Rahul" course="B.Tech" marks="85" />
      <Student name="Priya" course="BCA" marks="90" />
      <Student name="Amit" course="MCA" marks="78" />
 </div>
  );
}
export default App;

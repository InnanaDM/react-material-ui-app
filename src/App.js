import React, { Component } from "react";
import NavBar from "./components/NavBar";
import CoursesList from "./components/CoursesList";
import Course from "./components/Course";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CoursesList />
        <Course />
      </div>
    );
  }
}
export default App;

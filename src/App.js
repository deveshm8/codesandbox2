import "./styles.css";
import React from "react";
import Navbar from "./navbar";
export default function App() {
  return (
    <div className="App">
      <input type="search" class="icon" placeholder="search a location" />
      <Navbar />
    </div>
  );
}

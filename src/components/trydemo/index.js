import React from "react";
import "./trydemo.scss";
import Demo from "../../assets/images/demo.svg";
export default function Trydemo() {
  return (
    <div className="try-demo">
      <button>
        <img src={Demo} alt="Demo" />
        Try Demo
      </button>
    </div>
  );
}

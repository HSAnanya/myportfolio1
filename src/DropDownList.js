import React, { useState } from "react";
import { BiPhone } from "react-icons/bi";
import { FaBlog, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import './DropDownList.css'
function DropDownList() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <FaBlog /> Menu
      </button>

      {open && (
        <aside
          style={{
            position: "fixed",
            top: "0",
            left: 0,
            width: "200px",
            height: "100vh",
            backgroundColor: "#f9f9f9",      
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            zIndex: 1001,
            margin: 0,
            padding: "1rem 0",
            border: "none",
            borderRadius: 0
          }}
        >
          <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "10px",  
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer"
          }}
        >
          &times;
        </button>
          <nav>
            <ul style={{ listStyle: "none", padding: 10, margin: 2 }}>
  <li className="nav-item">
    <a className="dropdown-item" href="/">
      <FaHome /> Home
    </a>
  </li>
  <li className="nav-item">
    <a className="dropdown-item" href="/about">
      <FaUser /> About
    </a>
  </li>
  <li className="nav-item">
    <a className="dropdown-item" href="/projects">
      <FaProjectDiagram /> Projects
    </a>
  </li>
  <li className="nav-item">
    <a className="dropdown-item" href="/contact">
      <BiPhone /> Contact
    </a>
  </li>
</ul>
 </nav>
        </aside>
      )}
    </div>
  );
}

export default DropDownList;

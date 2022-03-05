import React, { useState, useEffect } from "react";
import { Link, useParams, Routes, Outlet } from "react-router-dom";
import { JournalPage } from "./JournalPage.js";
const Journals = ({data}) => {
  

  return (
    <div className="cardContainer">
      {data.map((item) => (
          <Link to={item.url} key={item.id}>
            <div className="card">
              <div className="card-header">{item.title}</div>
              <img
                src={item.img}
                className="card-img-top"
                alt={item.title}
              ></img>
              <p className="card-footer text-muted">{item.date}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Journals;

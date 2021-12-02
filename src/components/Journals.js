import React,{useState,useEffect} from 'react';
import { Link, useParams, Routes, Outlet } from "react-router-dom";
import {JournalPage} from './JournalPage.js';
const Journals = () => {
  const [data,setData]=useState([]);

    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setData(myJson.blogs);
          });
      }
  useEffect(()=>{
    getData()
  },[])

  let match = ""

    return (
              
                          <div className="cardContainer">
                  {data && data.length>0 && data.map((item)=>
                      <Link to={item.url} key={item.id}>
                          <div className="card" >
                              <div className="card-header">{item.title}</div>
                              <img src={item.img} className="card-img-top" alt={item.title}></img>
                              <p className="card-footer text-muted">{item.date}</p>
                          </div>
                      </Link>
                         )}
                          </div>
        
        
            )
}

export default (Journals);
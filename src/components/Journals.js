import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Link, useParams, Routes, Outlet } from "react-router-dom";
import {JournalPage} from './JournalPage.js';
const Journals = () => {
  const [data,setData]=useState([]);

    const getData=()=>{
        fetch('../public/data.json'
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
              
                          <div class="cardContainer">
                  {data && data.length>0 && data.map((item)=>
                      <Link to={item.url} key={item.id}>
                          <div class="card" >
                              <div class="card-header">{item.title}</div>
                              <img src={item.img} class="card-img-top" alt={item.title}></img>
                              <p class="card-footer text-muted">{item.date}</p>
                          </div>
                      </Link>
                         )}
                          </div>
        
        
            )
}

export default (Journals);
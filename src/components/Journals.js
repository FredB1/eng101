import {  withRouter } from "react-router-dom";
import React,{useState,useEffect} from 'react';

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
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson.blogs);
          });
      }
  useEffect(()=>{
    getData()
  },[])
  console.log(data)

    return (
        <div class="cardContainer">
            {data && data.length>0 && data.map((item)=>
                <a href="">
                    <div class="card" id={item.id}>
                        <div class="card-header">{item.title}</div>
                        <img src={item.img} class="card-img-top" alt={item.title}></img>
                        <p class="card-footer text-muted">{item.date}</p>
                    </div>
                </a>
                   )}


        </div>
        
            )
}

export default withRouter(Journals);
import {  withRouter } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import { HashRouter, Route, Switch, Link, useParams, useRouteMatch } from "react-router-dom";

const JournalPage = (props)=> {
  let { id } = useParams();
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
let post = data.find(post => post.url === id )
console.log(post)
return(

<div>  {post.content}
</div>
)}
export default JournalPage

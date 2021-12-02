
import React,{useState,useEffect} from 'react';
import { Route, Link, useParams } from "react-router-dom";

const JournalPage = ()=> {
  const { title } = useParams();
  const [data,setData]=useState(null);


useEffect(()=>{
  fetch('../data.json'
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
      })
 
},[])
let post = data && data.find(post => post.url === title )

return(<div className="blogContainer">
  <p> {post && post.date}</p>
<h1 className="centered">{post && post.title} </h1>

{post && <p className="blogText" dangerouslySetInnerHTML={{__html: post.content}}/>}
</div>

)}
export  {JournalPage};

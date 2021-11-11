import {  withRouter } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import { HashRouter, Route, Switch, Link, useParams, useRouteMatch } from "react-router-dom";
import JournalPage from './JournalPage.js';
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

  let match = useRouteMatch();

    return (<Switch>
            <Route exact path="/journals">
          <div class="cardContainer">
              {data && data.length>0 && data.map((item)=>
                  <Link to={"journals/" + item.url} key={item.id}>
                      <div class="card" >
                          <div class="card-header">{item.title}</div>
                          <img src={item.img} class="card-img-top" alt={item.title}></img>
                          <p class="card-footer text-muted">{item.date}</p>
                      </div>
                  </Link>
                     )}
          </div>
          </Route>
          <Route path={`/journals/:id`}>
          <JournalPage />
        </Route>
    </Switch>
        
        
            )
}

export default withRouter(Journals);
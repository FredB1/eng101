import React, { useState, useEffect } from "react";
import { Route, Link, useParams } from "react-router-dom";

const JournalPage = ({data}) => {
  const { title } = useParams();
  
  let post = data.find((post) => post.url === title);

  return (
    <div className="blogContainer">
      <p> {post && post.date}</p>
      <h1 className="centered">{post && post.title} </h1>

      {post && (
        <p
          className="blogText"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}
    </div>
  );
};
export { JournalPage };

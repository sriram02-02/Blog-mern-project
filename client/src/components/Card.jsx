import React, { useEffect, useState } from "react";

function Card({ posts }) {
  return (
    <div className="container card-div mt-5 ">
      {posts.map((post) => {
        return (
          <div class="card pt-0 p-3 mb-5">
            <div class="card-header bg-transparent border-success ps-1 pb-0 mt-2">
              <h5 className="">{post.username}</h5>
            </div>
            <img className="blog-image w-100 mt-3" src={post.photo} />

            <div class="card-body ">
              <h5 class="card-title">{post.head}</h5>
              <p class="card-text">{post.paragraph}</p>
              <a href="#" class="btn btn-dark">
                view more
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;

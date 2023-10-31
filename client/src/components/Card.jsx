import React from "react";
import my_image from "../components/card-1.jpg";

function Card() {
  return (
    <div className="container mt-5 ">
      <div class="card pt-0 p-3 mb-5">
          <h1 className=" mt-2 mb-3">Twilight-scenery</h1>
          <img className="blog-image w-100" src={my_image} />
        
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <a href="#" class="btn btn-dark">
            view more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

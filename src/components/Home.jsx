import React from "react";
//src="https://live.staticflickr.com/65535/51247705006_02587bec47_h.jpg"

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://live.staticflickr.com/65535/51248698294_a5ca9d5bd1_h.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-bold">Hey, I'm Cheng!</h1>
            <br></br>
            <p>
              I'm a 3rd year computer science student at NYU Shanghai, with the hopes of becoming a Software Engineer post grad.

              <br></br>
              <br></br>
              On my free time you can find me taking photos, going for a run, or looking for a new hobby!

              <br></br>
              <br></br>
              Feel free to reach out to me at chengang (dot) zhang (at) gmail.com or at cz1842 (at) nyu (dot) edu
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
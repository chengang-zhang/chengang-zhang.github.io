import React from "react";
//src="https://live.staticflickr.com/65535/51247705006_02587bec47_h.jpg"

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://live.staticflickr.com/65535/51248698294_a5ca9d5bd1_h.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-bold">Hey, I'm Cheng!</h1>
            <br></br>
            <p>
              I'm a software engineer working at Expedia Group in Seattle.

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
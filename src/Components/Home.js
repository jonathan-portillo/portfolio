import React from "react";
import About from "../Components/About";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="nameContainer">
          <h1 className="myName">
            Hi, my name is Jonathan Portillo and I am a Full Stack Web Developer
          </h1>
        </div>
      </div>
      <About />
    </>
  );
};
export default Home;

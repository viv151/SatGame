import React from "react";
import './home.css';
import { Link } from "react-router-dom";


const Home = () => {
 
  return (
  <div className="home">
  
    <div className="container">
    <div className='quizName'>GEOQUIZ</div>
      <Link to='/Game/game'><button className="start">Start Game</button></Link>
      </div>
      <div className="sign">
      <Link to=''><button className="login">Login</button></Link>
      <Link to=''><button className="signUp">Sign Up</button></Link>
      </div>
    </div>
  );
};

export default Home;
import './game.css';
import {useState} from 'react';
import { QuizData, images1 } from '../Data/QuizData';
import QuizResult from '../QuizResult';
import { Link } from 'react-router-dom';

const Game = () => {
   
const [image, setNewImage] = useState(images1[0]);
const [CorrectAns, setCorrectAns] = useState(0);
const [clicked, setClicked] = useState(false);
const [score, setScore] = useState(0);
const [randomNum1, setRandomNum] = useState(0);
const [showResult, setShowResult] = useState(false);


const handleAnswerOption=(isCorrect)=>{
  if(isCorrect){
    setScore( score + 1 );
    setCorrectAns(CorrectAns + 1);
  }
  setClicked(true)
};


const imgNum = () =>{
  setClicked(false)
      
      if(randomNum1<QuizData.length-1){
        setRandomNum(randomNum1+1);
        setNewImage(images1[randomNum1+1]);
      } else{
        setShowResult(true)
      }
     
};

const handlePlayAgain =() =>{
  setNewImage(images1[0]);
  setScore(0);
  setRandomNum(0);
  setCorrectAns(0);
  setShowResult(!showResult)
}
const handleQuit =() =>{
  setShowResult(!showResult)
}
  return (
    
        <>
        <h1><Link to='/'>Home</Link></h1>
        {/* <Router>
          <Routes>
          <Route path='/' Component={Home}/>
          </Routes>
  </Router> */}
        <div className="gameClass">
        {showResult ? (
      <QuizResult score={score} CorrectAns={CorrectAns} handlePlayAgain={handlePlayAgain}/>
      ):(<>
      <div className='gameActive'>
        <div className='question-section'>
          {/* <h5>Score: {score}</h5> */}
          <img id='map' src={image}></img>
        </div>
        <div className='ques'> Guess the following Satellite Image </div>
        <div className='question-count'>
      <span> Image {randomNum1+1} of {QuizData.length}</span>
    </div>
    <div className='answer-section'>
      {QuizData[randomNum1].options.map((ans,i) => {
        return(
          <button
          className= {`button ${(clicked && ans.isCorrect)? "correct" : (clicked && (ans.isCorrect==false))? "incorrect" : "button"}`}
          disabled ={clicked}
          key={i} 
          onClick={() => handleAnswerOption(ans.isCorrect)}
          >
            {ans.answerText}
          </button>
        );
        })}
    </div>
    <div className='actions'>
      <button type='button' onClick={imgNum }> Skip </button>
      <button disabled={!clicked} onClick={imgNum}> Next </button>
    </div>
    </div>
    <div className='quit'>
    <button class='btn btn-outline-primary' onClick={handleQuit}>Quit</button>
    </div>
      </>
      )}

</div>
</>
  );
}
export default Game;
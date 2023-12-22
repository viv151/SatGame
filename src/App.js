
import './App.css';
import {useState} from 'react';
import { QuizData, images1 } from './Data/QuizData';
import QuizResult from './QuizResult';

//console.log(QuizData.length);
function App() {
 
const [image, setNewImage] = useState(images1[0]);
const [CorrectAns, setCorrectAns] = useState(0);
const [clicked, setClicked] = useState(false);
const [score, setScore] = useState(0);
const[randomNum1, setRandomNum] = useState(0);
const [showResult, setShowResult] = useState(false);

// const handleNextOption=() =>{
//   const nextImage=image + 1;
//   setNewImage(images1[nextImage]);
// }

const handleAnswerOption=(isCorrect)=>{
  if(isCorrect){
    setScore( score + 1 );
    setCorrectAns(CorrectAns + 1);
  }
  setClicked(true)
};

// let randomNum1 = 0;
console.log(randomNum1);
console.log(score);
console.log(QuizData.length);

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
  setShowResult(false)
}
  return (
        <>
        <div className="App">
        {showResult ? (
      <QuizResult score={score} CorrectAns={CorrectAns} handlePlayAgain={handlePlayAgain}/>
      ):(<>
        <div className='question-section'>
          <h5>Score: {score}</h5>
          <img id='map' src={image}></img>
        </div>
        <div className='questiion-count'>
      <span> Image {image+1} of {QuizData.length}</span>
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
      <button onClick={handlePlayAgain}>Quit</button>
      <button disabled={!clicked} onClick={imgNum}> Next </button>
    </div>
    <div className='ques'> simran loves vivek's dick </div>
    {/* <div className='option1 option'></div>
    <div className='option2 option'></div>
    <div className='option3 option'></div>
    <div className='option4 option'></div> */}
    <button type='button' class='btn btn-outline-primary' onClick={imgNum }> start </button>
      </>
      )}
    

</div>
</>
  );
} 
export default App;

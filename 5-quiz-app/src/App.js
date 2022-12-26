import { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [count, setCount] = useState(0);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);

  const ButtonHandle = (e) => {
    console.log(e);
    const countnext = count + 1;
    if (e) {
      const scornext = score + 1;
      setScore(scornext);
    }

    if (countnext < questions.length) {
      setCount(countnext);
    } else {
      setFinish(true);
    }
  };
  const RefreshHandle=()=>{
   
    window.location.reload()
  }

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      {finish && (
        <div className="d-flex justify-content-center align-items-center bg-secondary" style={{position:"absolute",zIndex:"2",height:"100%",width: "100%",opacity:"0.9"}}>
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ backgroundColor:"#F6B600", height:"20rem",width: "40rem",opacity:""}}>
          <h1 style={{color:"#B72A1F"}} className=" fw-bold">Your score is {score} of {questions.length}</h1>
          <button className="btn btn-primary mt-4" onClick={RefreshHandle}>Try Again</button>
        </div>
        </div>
      )}
      <div
        style={{ height: "30rem", width: "60rem"}}
        className="bg-secondary rounded-5 d-flex "
      >
        <div className=" pb-5 text-white questionclass h-100 w-100 d-flex flex-column border justify-content-center align-items-center">
          <h1 className="text-info">Question {count+1}/{questions.length}</h1>
          <h2 className="text-warning text-center mt-3">{questions[count].questionText}</h2>
        </div>
        <div className="answerclass h-100 w-100 d-flex flex-column justify-content-center align-items-stretch border">
          {questions[count].answerOptions?.map((ans) => {
            return (
              <div
               
                onClick={() => ButtonHandle(ans.isCorrect)}
                className="btn btn-primary w-50 mx-auto my-3"
                key={ans.answerText}
              >
                {ans.answerText}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

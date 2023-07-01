import React, { useState } from "react";
import ErrorMessage from "./../ErrorMessage/ErrorMessage";
import "./Question.css"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

    const navigate = useNavigate();

  const handleSelect = (i) =>{
    if (selected === i  && selected === correct){
        return "select";
    } else if ( selected === i && selected !== correct){
        return "wrong";
    }else if(i === correct){
        return "select"
    }
  }

  const handleClick = (i) => {
    setSelected(i);
    if (i === correct ){
        setScore(score + 1);
    }
    setError(false);
  }

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };


  const handleNext = () => {
    if (currQues > 8){
        navigate("/Result");
    } else if (selected) {
        setCurrQues(currQues + 1);
        setSelected()
    } else {
        setError("Please select an option first")
    }
  }

  return (
    <div className="m-3">
      <h1 className=" font-semibold font-['Roboto] text-2xl "> Question {currQues + 1} </h1>

      <div  className=" border-solid border-4 rounded border-green-700 p-3 mt-3">
        <div className="p-5">
        <h2 className=" font-semibold font-['Roboto] text-xl"> {questions[currQues].question} </h2>
        </div>
      <div className=" flex flex-col justify-center items-center mt-4">
        {error && <ErrorMessage>Please fill all the feilds</ErrorMessage>}
        {options &&
          options.map((i) => (
            <button className={` singleOption ${selected && handleSelect(i)}`} onClick={() => handleClick(i) } key={i} disabled={selected}>
              {i}
            </button>
          ))}
      </div>
      <div className="mt-3 flex flex-row justify-evenly items-center">
        <Button variant="contained" color="secondary" size="large" onClick={handleQuit}>Quit</Button>
        <Button variant="contained" color="primary" size="large" onClick={handleNext}>Next Question</Button>
      </div>
    </div>
    </div>
  );
};

export default Question;

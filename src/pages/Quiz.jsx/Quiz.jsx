// import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../../components/Question";


const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-solid border-4 rounded border-cyan-700 shadow-xl w-fit shadow-black bg-contain mt-2">
        <span className="text-cyan-800 text-2xl font-medium p-1 sm:p-3 mx-5 font-['Roboto']">Welcome, {name}!!!</span>
      </div>

      {questions ? (
        <>
          <div className="flex flex-row w-[90%] justify-between items-center mt-3">
            <span className="font-normal font-['Roboto] text-xl sm:text-2xl">{questions[currQues].category}</span>
            <span className="font-normal font-['Roboto] text-xl sm:text-2xl">
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            className="mt-3"
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
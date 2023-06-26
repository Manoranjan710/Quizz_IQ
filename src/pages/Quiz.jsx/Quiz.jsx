import { Button } from "@mui/material";
import React from "react";

function Quiz({ name, category, score, setScore, questions, setQuestions }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-solid border-4 rounded border-cyan-700 shadow-xl w-fit shadow-black bg-contain mt-2">
        <h1 className=' text-cyan-800 text-xl font-medium p-1 sm:p-3 mx-5 font-["Roboto"]'>
          {" "}
          Welcome {name} !!!
        </h1>
      </div>
      <div className=" flex flex-row justify-center items-center mt-3">
        <span className="uppercase">category</span>
        <span className=" ml-52 sm:ml-96 uppercase">  Score: 0 </span>
      </div>
      <h1 className=" text-center text-black text-2xl font-bold mt-3 fon-['Roboto'] "> Question 1:</h1>

      <div className=" flex flex-col border-solid border-slate-700 border-4 w-[92%] mt-3 p-3">
        <h2 className=" text-2xl font-semibold text-black font-sans mb-3 ">What is the biggest animal on the earth?</h2>

        <div className="flex flex-col justify-center items-center space-y-2">
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        </div>

        <div className="flex flex-row space-x-10 items-center justify-center">
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        </div>

      </div>

    </div>
  );
}

export default Quiz;

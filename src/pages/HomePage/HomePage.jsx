import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import Categories from "../../Data/categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../ErrorMessage/ErrorMessage"; 
// import ErrorMessage from './../../ErrorMessage/ErrorMessage';


function HomePage({name, setName, fetchQuestions}) {
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = () => {
      if(!category || !difficulty || !name){
        setError(true)
        return ;
      }else{
        setError(false)
        fetchQuestions(category, difficulty);
        navigate("/quiz")
      }
  }

  return (
    <div className="m-5">
      <div className=" flex flex-col items-center justify-center py-2">
        <img
          src="https://www.alert-software.com/hs-fs/hubfs/employee%20quiz%20ideas.png?width=1280&name=employee%20quiz%20ideas.png"
          className="h-[40%] w-[100%]"
          alt=""
        />
        <h3 className=' text-black text-3xl font-semibold font-["Roboto"]  mt-7'>
          {" "}
          Quiz Settings
        </h3>
        <div className="p-3 flex flex-col items-center justify-center space-y-7">
          {error && <ErrorMessage>Please fill all the feilds</ErrorMessage>}
          <TextField
            label="Enter your name"
            variant="outlined"
            className="mt-3 mb-3"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Select Category"
            defaultValue=""
            variant="outlined"
            helperText="Please select your category"
            className="w-full "
            onChange={(e) => setCategory(e.target.value)}
            value = {category}
          >{Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            className="w-full "
            
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" onClick={handleSubmit}>  Start Quiz</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

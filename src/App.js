import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Quiz from "./pages/Quiz.jsx/Quiz";
import Result from "./pages/Result.jsx/Result";
import HomePage from "./pages/HomePage/HomePage";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
                exact
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                score={score}
                setScore={setScore}
                questions={questions}
                setQuestions={setQuestions}
              />
            }
          />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === slides.length - 1) {
      return;
    }
    setIndex(index + 1);
  };
  const handleRestart = () => {
    setIndex(0);
  };
  return (
    <>
      <div className="App">
        <h1 data-testid="title">{slides[index].tittle}</h1>
        <p data-testid="text">{slides[index].text}</p>
        <button type="btn" disabled data-testid="btn-prev" onClick={handlePrev}>
          Previous
        </button>
        <button
          type="btn"
          disabled
          data-testid="btn-restart"
          onClick={handleRestart}
        >
          Restart
        </button>
        <button type="btn" disabled data-testid="btn-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default App;

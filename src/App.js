import React, { useState } from 'react';

import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/Table/ResultsTable';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (inputData) => {
    setUserInput(inputData);
  };
  const resetHandler = () => {
    setUserInput(null);
  };

  return (
    <div className="App">
      <Header />
      <UserInput onCalculate={calculateHandler} onReset={resetHandler} />

      {!userInput ? <p style={{textAlign: 'center'}}>No investment data.</p> : <ResultsTable inputData={userInput} />}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];

  const handleClick = (btn) => {
    if (btn === 'C') {
      setInput('');
    } else if (btn === '=') {
      try {
        setInput(String(eval(input))); // Evaluate expression (be cautious with eval)
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + btn);
    }
  };

  return (
    <div>
      <div className="display">{input || '0'}</div>
      <br></br>
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

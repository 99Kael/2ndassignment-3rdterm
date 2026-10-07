import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [previousNumber, setPreviousNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const handleNumberClick = (number) => {
    if (display === '0') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }
  const handleOperatorClick = (selectedOperator) => {
    setPreviousNumber(Number(display))
    setOperator(selectedOperator)
    setDisplay('0')
  }
  const handleEqualsClick = () => {
    console.log("Previous:", previousNumber)
    console.log("Operator:", operator)
    console.log("Current:", display)
    const currentNumber = Number(display)
    let result
    if (operator === '/' && currentNumber === 0) {
      setDisplay('Error')
      return
    }
    switch (operator) {
      case '+':
        result = previousNumber + currentNumber
        break
      case '-':
        result = previousNumber - currentNumber
        break
      case '*':
        result = previousNumber * currentNumber
        break
      case '/':
        result = previousNumber / currentNumber
        break
      default:
        return
    }
    setDisplay(String(result))
  }
  const handleClearClick = () => {
    setDisplay('0')
    setPreviousNumber(null)
    setOperator(null)
  }
  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }
  return (
    <div className="calculator">
      <div className="display">
        {display}
      </div>

      <div className="buttons">
        <button onClick={handleClearClick}>AC</button>
        <button onClick={() => handleOperatorClick('/')}>÷</button>
        <button onClick={() => handleOperatorClick('*')}>x</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>

        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button className="plus" onClick={() => handleOperatorClick('+')}>+</button>

        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button className="equals" onClick={handleEqualsClick}>=</button>

        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>

        <button className="zero" onClick={() => handleNumberClick('0')}>0</button>
        <button className="doublezero" onClick={() => handleNumberClick('00')}>00</button>
        <button onClick={handleDecimalClick}>.</button>

      </div>
    </div>
  )
}

export default App
import "./index.scss";
import React from "react";

function App() {
  // let count = 55;
  const [count, setCount] = React.useState(10);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  const OnClickPlus2 = () => {
    setCount(count + 2);
  };
  const OnClickMinus2 = () => {
    setCount(count - 2);
  };

  const XTen = () => {
    setCount(count * 10);
  };

  const DivTen = () => {
    setCount(count / 10);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={OnClickMinus2} className="minus2">
          Минус 2
        </button>
        <button onClick={onClickMinus} className="minus">
          Минус -
        </button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
        <button onClick={OnClickPlus2} className="plus2">
          Плюс 2
        </button>
        <h3>
        <button onClick={DivTen} className="DivTen">
          Разделить на 10
        </button>
        <button onClick={XTen} className="xten">
          Умножить на 10
        </button>
        </h3>
      </div>
    </div>
  );
}

export default App;

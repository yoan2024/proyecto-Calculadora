import { useReducer, useState } from "react";
const App = () => {
  const [value, setInput] = useState("");

  return (
    <div className="box1">
      <label className="input">
        <input className="btn-input rtl-input" type="text" value={value} />
      </label>
      <div className="box2">
        <div className="btn btn-red" onClick={() => setInput("")}>
          AC
        </div>
        <div className="btn" onClick={(e) => setInput(value + "%")}>
          %
        </div>
        <div className="btn" onClick={(e) => setInput(value + "*")}>
          *
        </div>
        <div className="btn" onClick={(e) => setInput(value + "÷")}>
          ÷
        </div>
        <div className="btn" onClick={(e) => setInput(value + "7")}>
          7
        </div>
        <div className="btn" onClick={(e) => setInput(value + "8")}>
          8
        </div>
        <div className="btn" onClick={(e) => setInput(value + "9")}>
          9
        </div>
        <div className="btn" onClick={(e) => setInput(value + "-")}>
          -
        </div>
        <div className="btn" onClick={(e) => setInput(value + "4")}>
          4
        </div>
        <div className="btn" onClick={(e) => setInput(value + "5")}>
          5
        </div>
        <div className="btn" onClick={(e) => setInput(value + "6")}>
          6
        </div>
        <div className="btn" onClick={(e) => setInput(value + "+")}>
          +
        </div>
        <div className="btn" onClick={(e) => setInput(value + "1")}>
          1
        </div>
        <div className="btn" onClick={(e) => setInput(value + "2")}>
          2
        </div>
        <div className="btn" onClick={(e) => setInput(value + "3")}>
          3
        </div>
        <div
          className="btn"
          onClick={(e) => setInput({ value: "0" } + "Esto esta desabilitado")}
        >
          +/-
        </div>
        <div className="btn" onClick={(e) => setInput(value + "0")}>
          0
        </div>
        <div className="btn" onClick={(e) => setInput(value + ".")}>
          .
        </div>
        <div className="btn btn-yellow" onClick={(e) => setInput(eval(value))}>
          =
        </div>
      </div>
    </div>
  );
};

export default App;

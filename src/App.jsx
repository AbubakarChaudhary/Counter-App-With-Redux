import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber, resetNumber } from "./actions/index";
import "./App.css";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="counter">
        <h1>React Counter</h1>
        <span className="counter__output">{myState}</span>
        <div className="btn__container">
          <button
            className="control__btn"
            onClick={() => dispatch(decNumber())}
          >
            -
          </button>
          <button
            className="control__btn"
            onClick={() => dispatch(incNumber())}
          >
            +
          </button>
          <button className="reset" onClick={() => dispatch(resetNumber())}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

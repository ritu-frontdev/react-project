import { useState } from "react";

const Calculator = () => {
  const [val, setval] = useState("");

  return (
    <>
      <div className="cbox">
        <input
          type="text"
          className="screen"
          name="screen"
          readOnly
          value={val}
        />
        <br />
        <div className="cbutton">
          <button className="button" onClick={(e) => setval("")}>
            Ac
          </button>
          <button
            value="-"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            +/-
          </button>
          <button
            value="%"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            %
          </button>
          <button
            value="/"
            className="button1"
            onClick={(e) => setval(val + e.target.value)}
          >
            div
          </button>
          <br />
          <button
            value="7"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            7
          </button>
          <button
            value="8"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            8
          </button>
          <button
            value="9"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            9
          </button>
          <button
            value="*"
            className="button1"
            onClick={(e) => setval(val + e.target.value)}
          >
            x
          </button>
          <br />
          <button
            value="4"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            4
          </button>
          <button
            value="5"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            5
          </button>
          <button
            value="6"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            6
          </button>
          <button
            value="-"
            className="button1"
            onClick={(e) => setval(val + e.target.value)}
          >
            -
          </button>
          <br />
          <button
            value="1"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            1
          </button>
          <button
            value="2"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            2
          </button>
          <button
            value="3"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            3
          </button>
          <button
            value="+"
            className="button1"
            onClick={(e) => setval(val + e.target.value)}
          >
            +
          </button>
          <br />
          <button
            value="0"
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            0
          </button>
          <button
            value="."
            className="button"
            onClick={(e) => setval(val + e.target.value)}
          >
            .
          </button>
          <button
            value="="
            className="button2"
            onClick={(e) => setval(eval(val))}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};
export default Calculator;

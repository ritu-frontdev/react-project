import { useState } from "react";

const Scientificcalculator = () => {
  const [click, setclick] = useState("");
  const [selected, setselected] = useState();

  function output() {
    if (selected === "Deg") {
      setclick(eval(click));
    } else if (selected === "Rad") {
      setclick(eval(click));
    } else if (click.includes("e^")) {
      setclick(eval(click.replaceAll("e^", "2.718**")));
    } else if (click.includes("^")) {
      setclick(eval(click.replaceAll("^", "**")));
    } else if (click.includes("e")) {
      setclick(eval(click.replaceAll("e", "2.718")));
    } else if (click.includes("√")) {
      setclick(eval(click.substring(1, click.length) ** 0.5));
    } else if (click.includes("%")) {
      setclick(eval(click.replaceAll("%", "/100*")));
    } else if (click.includes("π")) {
      setclick(eval(click.replaceAll("π", "*3.14")));
    } else if (click.includes("!")) {
      setclick(fact(parseInt(click.substring(0, click.length - 1))));
    } else {
      setclick(eval(click));
    }
  }

  function Rad(x) {
    return x * (Math.PI / 180);
  }

  function sin(x) {
    if (selected === "Deg") {
      return Math.sin((x * Math.PI) / 180);
    } else {
      return Math.sin(x);
    }
  }

  function cos(x) {
    if (selected === "Deg") {
      return Math.cos((x * Math.PI) / 180);
    } else {
      return Math.cos(x);
    }
  }

  function tan(x) {
    if (selected === "Deg") {
      return Math.tan((x * Math.PI) / 180);
    } else {
      return Math.tan(x);
    }
  }

  function asin(x) {
    if (x > 1 || x < -1) {
      return "Error";
    } else if (selected === "Deg") {
      return (Math.asin(x) * 180) / Math.PI;
    } else {
      return Math.asin(x);
    }
  }

  function acos(x) {
    if (x > 1 || x < -1) {
      return "Error";
    } else if (selected === "Deg") {
      return (Math.acos(x) * 180) / Math.PI;
    } else {
      return Math.acos(x);
    }
  }

  function atan(x) {
    if (selected === "Deg") {
      return (Math.atan(x) * 180) / Math.PI;
    } else {
      return Math.atan(x);
    }
  }
  function ln(x) {
    return Math.log(x);
  }
  function log(x) {
    return Math.log10(x);
  }
  function fact(n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }

  return (
    <>
      <div className="sclcy">
        <input
          type="text"
          className="sclcys"
          name="screen"
          readOnly
          value={click}
        />
        <div className="sclcybuttons">
          <button
            value="sin"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            sin
          </button>
          <button
            value="cos"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            cos
          </button>
          <button
            value="tan"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            tan
          </button>

          <button className="radio">
            <input
              type="radio"
              name="abc"
              value="Rad"
              onChange={(e) => setselected(e.target.value)}
            />
            Rad
            <input
              type="radio"
              name="abc"
              value="Deg"
              onChange={(e) => setselected(e.target.value)}
            />
            Deg
          </button>
          <br />
          <button
            value="asin"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            sin<sup>-1</sup>
          </button>
          <button
            value="acos"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            cos<sup>-1</sup>
          </button>
          <button
            value="atan"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            tan<sup>-1</sup>
          </button>
          <button
            value="π"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            &#960;
          </button>
          <button
            value="e"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            e
          </button>
          <br />
          <button
            value="^"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            x<sup>y</sup>
          </button>
          <button
            value="√"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            &radic;x
          </button>
          <button
            value="ln"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            ln
          </button>
          <button
            value="log"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            log
          </button>
          <button
            value="!"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            n!
          </button>
          <button
            value="("
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            (
          </button>
          <button
            value=")"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            )
          </button>
          <button
            value="%"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            %
          </button>

          <button
            value=""
            className="sclcybtn"
            onClick={(e) => setclick(click + "*10**")}
          >
            Exp
          </button>

          <button
            value=""
            className="sclcybtn"
            onClick={(e) => setclick(click.substring(0, click.length - 1))}
          >
            CE
          </button>

          <button
            value="7"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            7
          </button>
          <button
            value="8"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            8
          </button>
          <button
            value="9"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            9
          </button>
          <button
            value="+"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            +
          </button>

          <button
            value="-"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            -
          </button>

          <button
            value="4"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            4
          </button>
          <button
            value="5"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            5
          </button>
          <button
            value="6"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            6
          </button>

          <button
            value="*"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            x
          </button>

          <button
            value="/"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            /
          </button>

          <button
            value="1"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            1
          </button>
          <button
            value="2"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            2
          </button>
          <button
            value="3"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            3
          </button>

          <button value="" className="sclcybtn" onClick={(e) => setclick("")}>
            AC
          </button>

          <button value="=" className="sclcybtn" onClick={output}>
            =
          </button>

          <button
            value="."
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            .
          </button>

          <button
            value="0"
            className="sclcybtn"
            onClick={(e) => setclick(click + e.target.value)}
          >
            0
          </button>
        </div>
      </div>
    </>
  );
};
export default Scientificcalculator;

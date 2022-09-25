import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/fontawesome-free-solid";

const Searchemoji = () => {
  const [search, setsearch] = useState("");
  const [result, setresult] = useState([]);

  let data = require("./Search emoji.json");
  if (search.length > 0) {
    data.forEach((i) => {
      if (i.name.toLowerCase().includes(search.toLowerCase())) {
        result.push(i.char);
      }
    });
  }
  function myfunction(e) {
    let b = document.getElementById("xyz");
    b.value += e.target.textContent;
  }

  function myclick() {
    let copy = document.getElementById("xyz");
    navigator.clipboard.writeText(copy.value);
    alert("Emoji is copied");
    copy.value = "";
  }

  document.addEventListener("click", (e) => {
    //console.log(e.target);
    //console.log(e.target.tagName);
    if (e.target.tagName === "HTML") {
      setsearch("");
      setresult([]);
    }
  });
  return (
    <center className="main">
      <h1>Emoji Search</h1>
      <input
        type="search"
        name="search1"
        id="abc"
        placeholder="
        search emoji"
        autoComplete="off"
        value={search}
        onChange={(e) => {
          setresult([]);
          setsearch(e.target.value);
        }}
      />

      {"    "}
      <input type="text" id="xyz" placeholder="Copy emoji" />
      <FontAwesomeIcon
        icon={faCopy}
        className="copy"
        onClick={() => myclick()}
      />
      <div>
        <ul>
          {result.map((i) => (
            <li onClick={(e) => myfunction(e)} key={i.toString()}>
              <a href="#">{i}</a>
            </li>
          ))}
        </ul>
      </div>
    </center>
  );
};
export default Searchemoji;

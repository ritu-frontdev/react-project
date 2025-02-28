import { Link } from "react-router-dom";
export default function AllContent() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/helloworld">
            <li>Hello world</li>
          </Link>

          <Link to="/simplecounter">
            <li>Simple Counter</li>
          </Link>

          <Link to="/weather">
            <li>Weather App</li>
          </Link>

          <Link to="/calculator">
            <li>Simple Calculator</li>
          </Link>
          <Link to="/scientificcalculator">
            <li>Scientific Calculator</li>
          </Link>
          <Link to="/searchemoji">
            <li>Search Emoji</li>
          </Link>

          <Link to="/chatlogin">
            <li>Chat App</li>
          </Link>
          <Link to ="Firstpage">
          <li>News App</li>          
          </Link>
          </ul>
      </nav>
    </>
  );
}

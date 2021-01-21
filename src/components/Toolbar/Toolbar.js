import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const ToDo = () => <div>ToDo</div>;
const Contact = () => <div>Contact</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="./Form.js">TO DO  |</Link>
        </li>
        <li>
          <Link to="./Form2.js"> CONTACT US</Link>
        </li>

      </ul>
      <hr />
      <Route exact path="./Form.js" component={ToDo} />
      <Route path="./Form2" component={Contact} />
    </div>
  </BrowserRouter>
);
export default App;
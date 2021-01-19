import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const ToDo = () => <div>Home</div>;
const Contacts = () => <div>About</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="./Form.js">TO DO  |</Link>
        </li>
        <li>
          <Link to="./Form2.js"> CONTACTS</Link>
        </li>

      </ul>
      <hr />
      <Route exact path="./Form.js" component={ToDo} />
      <Route path="./Form2" component={Contacts} />
    </div>
  </BrowserRouter>
);
export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";


const DATA = [
  
  
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

const App = () => (
<BrowserRouter> 
<div>
  <Route path="/Form" render={(props) => <div>ToDo</div>}/> 
  <Route path="/Form2" render={(props) => <div>Contacts</div>}/>
</div>
</BrowserRouter>
);
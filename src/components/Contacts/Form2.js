/*
import React, { useState } from "react";
function Form2(props) {
  const [name, setName] = useState('');

function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }


return (
  <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg"> 
          ENTER NEW CONTACT
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        ADD CONTACT
      </button>
    </form>
  );
}

export default Form2;
*/
import React from 'react';


const Contact = () => {
  return(
    <form className="form">
      <h2>CONTACT US</h2>
      <label>Name</label>
      <input className="name"placeholder="name"/>

      <label>Email</label>
      <input className="email"placeholder="email"/>

      <label>Message</label>
      <textarea className="message"placeholder="message"></textarea>
      <br></br>
      <button className="submit" type="submit">SUBMIT</button>

      

    </form>
  )
}
export default Contact
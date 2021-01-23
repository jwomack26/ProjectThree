import React from 'react';

const Contact = () => {
  
  return(
    <form className="form">
      <h2 className="label__lg">CONTACT US</h2>
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
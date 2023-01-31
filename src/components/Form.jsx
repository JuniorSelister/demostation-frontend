import React from "react";

const Form = () => {
  return (
    <div className="form">
      <input type="email" placeholder="e-mail"/>
      <textarea name="message" id="" cols="30" rows="10" placeholder="Message" maxLength={200}></textarea>
    </div>
  );
}

export default Form;
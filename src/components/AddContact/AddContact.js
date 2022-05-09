import { useState } from "react";
import "./AddContact.css";
const AddContact = ({ addContacthandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const inputChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    if (!contact.name || !contact.email) {
      alert("All fields are neccessary to be filled!");
      return;
    }
    e.preventDefault();
    addContacthandler(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <lable>name</lable>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="formControl">
        <lable>email</lable>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={inputChangeHandler}
        />
      </div>
      <button type="submit" className="deleteButton">Add Contact</button>
    </form>
  );
};
export default AddContact;

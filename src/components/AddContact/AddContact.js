import { useState } from "react";
const AddContact = ({ addContacthandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const nameInputChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addContacthandler(contact);
    setContact({ name: " ", email: " " });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <lable>name</lable>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="formControl">
        <lable>email</lable>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={nameInputChangeHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};
export default AddContact;

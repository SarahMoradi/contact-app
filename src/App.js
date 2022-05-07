import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contactList, setContactList] = useState([]);
  const deleteHandler = (id) => {
    console.log(id, "delete");
  };
  const addContacthandler = (contact) => {
    console.log(contact);
    setContactList([
      ...contactList,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };
  return (
    <main className="App">
      <h1>Contact App</h1>
      <section>Add Contact</section>
      <AddContact addContacthandler={addContacthandler} />
      <section>Contact List</section>
      <ContactList contactList={contactList} deleteHandler={deleteHandler} />
    </main>
  );
}

export default App;

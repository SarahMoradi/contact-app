import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contactList, setContactList] = useState([]);

  const deleteHandler = (id) => {
    const filteredContact = contactList.filter((item) => item.id !== id);
    setContactList(filteredContact);
  };

  const addContacthandler = (contact) => {
    console.log(contact);
    setContactList([
      ...contactList,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contact"));
    if (savedContacts) setContactList(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <main className="App">
      <h1>Contact App</h1>
      <AddContact addContacthandler={addContacthandler} />
      <ContactList contactList={contactList} onDelete={deleteHandler} />
    </main>
  );
}

export default App;

import "./ContactList.css";
import { FcFullTrash } from "react-icons/fc";
const ContactList = ({ contactList, onDelete }) => {
  console.log(contactList, "from contactlist");
  return (
    <section className="contactList">
      {contactList.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className="contactItem">
            <img src="./avatar.png" alt="user" className="user-image"/>
            <p className="item">name is : {name}</p>
            <p className="item">email is : {email}</p>
            <FcFullTrash
              onClick={() => onDelete(contact.id)}
              className="delete-icons"
            />
          </div>
        );
      })}
    </section>
  );
};
export default ContactList;

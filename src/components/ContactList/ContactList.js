const ContactList = ({ contactList, deleteHandler }) => {
  console.log(contactList, "from contactlist");
  return (
    <>
      {contactList.map((contact) => {
        return (
          <div>
            <p>name is : {contact.name}</p>
            <p>email is : {contact.email}</p>
            <button onClick={() => deleteHandler(contact.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};
export default ContactList;

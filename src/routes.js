import { Link, Route } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
const Routes = () => {
    return(
        <>
            <Link to="/add-contact" element={<AddContact />} />
            <Link to="/contact-list" element={<ContactList />} />
        </>
    )
}
export default Routes;
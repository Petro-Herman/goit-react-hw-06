// import { useDispatch, useSelector } from "react-redux";
// import { deleteContact, selectContacts } from "../../redux/contactsSlice";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// export default function ContactList() {
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <li className={css.item} key={contact.id}>
//           <Contact
//             id={contact.id}
//             name={contact.name}
//             number={contact.number}
//             onDelete={() => dispatch(deleteContact(contact.id))}
//           />
//           {/* <button onClick={() => dispatch(deleteContact(contact.id))}>
//             Delete
//           </button> */}
//         </li>
//       ))}
//     </ul>
//   );
// }

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
// import { selectContacts } from "../redux/contactsSlice";
// import { selectNameFilter } from "../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchValue = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}

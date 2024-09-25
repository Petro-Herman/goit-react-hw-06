import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id: Date.now().toString(), name, number }));
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Number" required />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

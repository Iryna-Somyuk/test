import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selector';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className="flex flex-col gap-2">
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { Section } from '../components/SectionTitle/SectionTitle';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selector';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center mx-auto my-0 w-[500px] border-none rounded-md bg-gradient-to-b from-[#f79d00] to-[#387a4d]">
        <Section title="Phonebook">
          <PhonebookForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          {!isLoading && <ContactsList />}
        </Section>
      </div>
    </>
  );
};
export default Contacts;

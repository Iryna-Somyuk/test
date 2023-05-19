import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selector';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from 'redux/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {

    console.log(values);
    if (contacts.find(contact => contact.name === values.name)) {
      toast.error('Attention, this contact is already in the phonebook!', {
        duration: 4000,
      });
      return;
    }
    dispatch(addContact(values));

    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className='flex flex-col'>
          <label className='flex flex-col gap-1 mb-3 font-normal text-lg'>
            Name
            <Field className='p-1 text-lg border-2 rounded w-72'
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage className='text-rose-700 text-xs font-normal' name="name" component="span" />
          </label>
          <label className='flex flex-col gap-1 mb-3 font-normal text-lg'>
            Number{' '}
            <Field className='p-1 text-lg border-2 rounded w-72'
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage className='text-rose-700 text-xs font-normal' name="number" component="span" />
          </label>
          <button className='p-1 justify-center items-center w-28 h-8 border-2 rounded text-black text-sm bg-[#bd9247] hover:bg-transparent hover:border-[#bd9247]' type="submit">Add contact</button>
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

// Ванільна форма
// export const PhonebookForm = ({ onSubmit }) => {
//   const handleSubmit = event => {
//     event.preventDefault();

//     const { name, number } = event.target.elements;
//     onSubmit(name.value, number.value);
//     name.value = '';
//     number.value = '';
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <Label>
//         Name
//         <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </Label>
//       <Label>
//         Number{' '}
//         <Input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </Label>
//       <Btn type="submit">Add contact</Btn>
//     </FormContainer>
//   );
// };

// PhonebookForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }

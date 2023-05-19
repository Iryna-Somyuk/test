import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editingContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';

export const EditForm = ({ id, onClose }) => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const { name, number } = contacts.find(el => el.id === id);

    const [editName, setEditName] = useState(name);
    const [editNumber, setEditNumber] = useState(number);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setEditName(value);
                break;

            case 'number':
                setEditNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        dispatch(
            editingContact({ id, name: editName, number: editNumber })
        );

        onClose();
    };

    return (
        <>
            {' '}
            <form className=' w-72 flex flex-col items-center border-2 p-5 rounded my-0 mx-auto ' onSubmit={handleSubmit} autoComplete="off">
                <label className='w-52  flex flex-col gap-1 mb-4 text-xs font-normal capitalize text-black'>
                    Name
                    <input className=' w-full p-1 text-xs font-normal border-2 border-solid  rounded'
                        name="name"
                        value={editName}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </label>
                <label className='w-52 flex flex-col gap-1 mb-4 text-xs font-normal capitalize text-black'>
                    Number
                    <input className=' w-full p-1 text-xs font-normal border-2 border-solid  rounded'
                        type="tel"
                        name="number"
                        value={editNumber}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        placeholder="000-00-00"
                    />
                </label>
                <ul className='flex justify-around w-full mt-5'>
                    <li>
                        <button className='text-gray-dark w-20 h-8 px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer' type="submit" text="Edit">
                            Edit
                        </button>
                    </li>
                    <li>
                        <button className='text-gray-dark w-20 h-8 px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer'
                            type="button"
                            text="Cancel"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </li>
                </ul>
            </form>
        </>
    );
};

EditForm.propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};
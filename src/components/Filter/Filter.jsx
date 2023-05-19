import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selector';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = ev => {
    dispatch(setFilter(ev.target.value));
  };

  return (
    <label className="flex flex-col gap-1 mb-3 font-medium text-lg">
      Find contacts by name
      <input
        className="p-1 border-2 rounded w-72 text-base"
        type="text"
        name="name"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
    </label>
  );
};

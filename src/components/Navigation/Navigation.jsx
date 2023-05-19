import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { FcContacts } from 'react-icons/fc';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="inline-flex gap-5 items-center justify-center ">
      <p className=" ml-5 inline-flex gap-0 items-center justify-center font-sans text-base font-bold">
        <FcContacts size={20} /> Phonebook
      </p>
      <nav className="hidden md:flex space-x-4">
        <NavLink
          className="curcor-pointer text-gray-dark text-lg font-bold  hover:text-orange hover:underline"
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className="flex space-x-2 curcor-pointer text-gray-dark text-lg font-bold  hover:text-orange hover:underline"
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

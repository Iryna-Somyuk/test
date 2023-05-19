import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className="hidden md:flex space-x-5">
      <NavLink
        className="text-gray-dark px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer"
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className="text-gray-dark px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer"
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

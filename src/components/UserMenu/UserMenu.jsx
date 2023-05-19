import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleSubmit = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex items-center gap-3">
      <span className="font-bold text-md md:text-lg text-black">Welcome, </span>
      <p className="font-bold text-md md:text-lg text-sky-600 underline">
        {' '}
        {user.name}!
      </p>
      <button
        className="text-gray-dark px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer"
        type="button"
        onClick={handleSubmit}
      >
        Logout
      </button>
    </div>
  );
};

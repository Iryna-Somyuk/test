import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="container py-4 flex space-x-5 justify-between items-center border-b-2 border-slate-400">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <MobileMenu />
    </header>
  );
};

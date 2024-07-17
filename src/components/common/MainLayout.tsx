import { Link, Outlet } from 'react-router-dom';
import UserStatusBar from '../auth/UserStatusBar';

export default function MainLayout() {
  return (
    <div className="mx-auto my-0 flex min-h-screen flex-col lg:w-[1024px]">
      <div className="flex flex-row justify-between px-4">
        <Link className="p-2" to="/">Clove</Link>
        <UserStatusBar />
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

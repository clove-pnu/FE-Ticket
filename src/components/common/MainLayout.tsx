import { Link, Outlet } from 'react-router-dom';
import UserStatusBar from '../auth/UserStatusBar';

export default function MainLayout() {
  return (
    <div className="mx-auto my-0 flex min-h-screen flex-col lg:w-[1024px]">
      <div className="flex flex-row lg:w-[1024px]">
        <UserStatusBar />
        <Link className="p-2" to="/">Clove</Link>
      </div>
      <Outlet />
    </div>
  );
}

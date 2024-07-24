import { Link, Outlet } from 'react-router-dom';
import UserStatusBar from '../auth/UserStatusBar';
import SearchBar from './SearchBar';

export default function MainLayout() {
  return (
    <div className="mx-auto my-0 flex min-h-screen flex-col xl:w-[1187px]">
      <div className="flex flex-row justify-between p-4">
        <div className="flex w-2/5 flex-row items-end gap-4">
          <div>
            <Link className="flex px-4 text-center text-3xl font-bold" to="/">Clove</Link>
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
        <UserStatusBar />
      </div>
      <Outlet />
    </div>
  );
}

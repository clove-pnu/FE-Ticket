import { Link, Outlet } from 'react-router-dom';
import UserStatusBar from '../auth/UserStatusBar';

export default function MainLayout() {
  return (
    <div>
      <div className="flex flex-row">
        <UserStatusBar />
        <Link
          className="p-2"
          to="./owner"
        >
          판매자 페이지
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

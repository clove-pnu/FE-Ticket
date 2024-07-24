import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteToken, getExistToken } from '../../utils/auth';
import { useAuth } from '../../hooks/useAuth';
import Divider from '../common/Divider';

export default function UserStatusBar() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const token = getExistToken();

    if (token) {
      setAuth({ isLogin: true });
    }
  }, []);

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    deleteToken();
    setAuth({ isLogin: false });
  };

  if (!auth.isLogin) {
    return (
      <div className="px-2 py-1">
        <Link to="/login">로그인</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center gap-4 p-2">
      <div>
        사용자 이름
      </div>
      <Divider />
      <Link to="./owner">
        공연 관리
      </Link>
      <Divider />
      <div>
        <button
          type="button"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

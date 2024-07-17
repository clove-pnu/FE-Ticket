import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteToken, getExistToken } from '../../utils/auth';
import { useAuth } from '../../hooks/useAuth';

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
      <div className="p-2">
        <Link to="/login">로그인</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-2 p-2">
      <div>
        이메일: 테스트 이메일
      </div>
      <div>
        사용자 타입: 테스트 타입
      </div>
      <div className="border border-gray-200" />
      <Link to="./owner">
        판매자 페이지
      </Link>
      <div className="border border-gray-200" />
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

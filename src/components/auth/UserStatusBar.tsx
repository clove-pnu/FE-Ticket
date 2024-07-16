import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface UserStatus {
  id: string;
  type: number;
  isLogin: boolean;
}

const initialUserStatus: UserStatus = {
  id: null,
  type: null,
  isLogin: false,
};

export default function UserStatusBar() {
  const [userStatus, setUserStatus] = useState<UserStatus>(initialUserStatus);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    const type = localStorage.getItem('userType');

    if (id !== null && type !== null) {
      setUserStatus({
        id,
        type: Number(type),
        isLogin: true,
      });
    }
  }, []);

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
    setUserStatus(initialUserStatus);
  };

  if (!userStatus.isLogin) {
    return (
      <div className="p-2">
        <Link to="/login">로그인</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-2 p-2">
      <div>
        아이디:
        {userStatus.id}
      </div>
      <div>
        사용자 타입:
        {userStatus.type}
      </div>
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

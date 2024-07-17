import { useEffect, useState } from 'react';
import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import { setToken } from '../../utils/auth';
import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLogin) {
      navigate(location.state?.from || '/', { replace: true });
    }
  }, [auth.isLogin, location.state?.from, navigate]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmail('');
    setPassword('');

    setToken({ token: 'Bearer TestToken!!' });
    setAuth({ isLogin: true });
  };

  return (
    <div className="p-4">
      <h1 className="my-4 text-4xl font-bold">Login</h1>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <Link to="/register">회원가입</Link>
    </div>
  );
}

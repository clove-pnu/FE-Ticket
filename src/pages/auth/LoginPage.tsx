import { useEffect, useState } from 'react';
import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import { setToken } from '../../utils/auth';
import { useAuth } from '../../hooks/useAuth';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { TokenResponse } from '../../utils/type';
import { login } from '../../apis/auth';

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

    fetchWithHandler<TokenResponse>(() => login({ email, password }), {
      onSuccess: (response) => {
        setToken({
          accessToken: response.data.accessToken,
          accessTokenExpiresIn: response.data.accessTokenExpiresIn,
        });
        setAuth({ isLogin: true });
      },
      onError: () => {
        alert('로그인에 실패하였습니다.');
      },
    });

    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <div className="flex flex-col items-start gap-4 p-4">
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
    </main>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem('userId', 'test');
    localStorage.setItem('userType', '1');

    setId('');
    setPassword('');
  };

  return (
    <div className="p-4">
      <h1 className="my-4 text-4xl font-bold">Login</h1>
      <LoginForm
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <Link to="/register">회원가입</Link>
    </div>
  );
}

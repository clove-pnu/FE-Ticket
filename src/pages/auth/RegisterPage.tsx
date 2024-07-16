import { useState } from 'react';
import RegisterForm from '../../components/auth/RegisterForm';

export default function RegisterPage() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id, password, confirmPassword);
    setId('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="p-4">
      <h1 className="my-4 text-4xl font-bold">Register</h1>
      <RegisterForm
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleRegister={handleRegister}
      />
    </div>
  );
}

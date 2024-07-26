import Button from '../common/Button';
import TextInput from '../common/TextInput';

interface LoginFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: React.FormEventHandler<HTMLFormElement>;
}

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}: LoginFormProps) {
  return (
    <div>
      <form
        className="flex flex-col items-stretch gap-12"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col gap-6">
          <TextInput
            name="이메일"
            value={email}
            setValue={setEmail}
            required
          />
          <TextInput
            name="비밀번호"
            value={password}
            setValue={setPassword}
            secret
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <Button
            type="submit"
          >
            로그인
          </Button>
        </div>
      </form>
    </div>
  );
}

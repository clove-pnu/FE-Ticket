import TextInput from '../common/TextInput';

interface LoginFormProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: React.FormEventHandler<HTMLFormElement>;
}

export default function LoginForm({
  id,
  setId,
  password,
  setPassword,
  handleLogin,
}: LoginFormProps) {
  return (
    <div>
      <form
        className="flex flex-col items-start gap-4"
        onSubmit={handleLogin}
      >
        <TextInput
          name="아이디"
          value={id}
          setValue={setId}
          required
        />
        <TextInput
          name="비밀번호"
          value={password}
          setValue={setPassword}
          secret
          required
        />
        <button type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}

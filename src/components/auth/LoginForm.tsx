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
        className="flex flex-col items-start gap-4"
        onSubmit={handleLogin}
      >
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
        <button
          type="submit"
          className="rounded-md bg-zinc-700 px-6 py-2 text-white"
        >
          로그인
        </button>
      </form>
    </div>
  );
}

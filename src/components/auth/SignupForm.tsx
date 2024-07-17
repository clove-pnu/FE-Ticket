import TextInput from '../common/TextInput';

interface RegisterFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  handleRegister: React.FormEventHandler<HTMLFormElement>;
}

export default function RegisterForm({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleRegister,
}: RegisterFormProps) {
  return (
    <div>
      <form
        className="flex flex-col items-start gap-4"
        onSubmit={handleRegister}
      >
        <TextInput
          name="아이디"
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
        <TextInput
          name="비밀번호 확인"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secret
          required
        />
        <button type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}

import Button from '../common/Button';
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
        className="flex flex-col items-stretch gap-12"
        onSubmit={handleRegister}
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
          <TextInput
            name="비밀번호 확인"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secret
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <Button
            type="submit"
          >
            회원가입
          </Button>
        </div>
      </form>
    </div>
  );
}

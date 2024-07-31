import Button from '../common/Button';
import TextInput from '../common/TextInput';

interface RegisterFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  userType: number;
  setUserType: React.Dispatch<React.SetStateAction<number>>;
  handleRegister: React.FormEventHandler<HTMLFormElement>;
}

export default function RegisterForm({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  userType,
  setUserType,
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
          <div className="flex justify-center">회원 구분</div>
          <div className="flex flex-row justify-evenly">
            <label
              className="flex flex-row gap-2"
              htmlFor="client"
            >
              <input
                type="radio"
                name="userType"
                id="client"
                value={0}
                checked={userType === 0}
                onChange={(e) => setUserType(Number(e.target.value))}
              />
              예매자
            </label>
            <label
              className="flex flex-row gap-2"
              htmlFor="owner"
            >
              <input
                type="radio"
                name="userType"
                id="owner"
                value={1}
                checked={userType === 1}
                onChange={(e) => setUserType(Number(e.target.value))}
              />
              판매자
            </label>
          </div>
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

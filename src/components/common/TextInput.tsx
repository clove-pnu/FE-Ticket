interface TextInputProps {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  secret?: boolean;
  required?: boolean;
}

export default function TextInput({
  name,
  value,
  setValue,
  required = false,
  secret = false,
}: TextInputProps) {
  return (
    <div className="flex flex-row items-center gap-2 border-b-2 border-black py-2">
      <label
        className="px-2 font-bold"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className="grow px-2 py-1 focus:outline-none"
        type={secret ? 'password' : 'text'}
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-required={required}
        aria-label={`${name} 입력`}
      />
    </div>
  );
}

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
    <div className="flex flex-col">
      <label htmlFor={name}>{name}</label>
      <input
        className="rounded-md border border-black px-2 py-1"
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

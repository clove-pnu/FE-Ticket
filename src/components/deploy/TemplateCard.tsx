import { Template } from '../../utils/type';

interface TemplateCardProps extends Template {
  selectedTemplateType: string;
  setSelectedTemplateType: React.Dispatch<React.SetStateAction<string>>;
}

export default function TemplateCard({
  selectedTemplateType,
  setSelectedTemplateType,
  name,
  type,
  description,
}: TemplateCardProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    setSelectedTemplateType(type);
  };

  return (
    <label
      className={`flex flex-row gap-4 rounded-xl border-2 px-6 py-10
        ${type === selectedTemplateType ? 'border-clove' : 'border-clove-light'}`}
      htmlFor={type}
    >
      <input
        type="radio"
        name="template"
        id={type}
        value={type}
        checked={type === selectedTemplateType}
        onChange={handleChange}
      />
      <div className="flex flex-row items-center gap-24">
        <div className="text-2xl font-bold">{name}</div>
        <div>{description}</div>
      </div>
    </label>
  );
}

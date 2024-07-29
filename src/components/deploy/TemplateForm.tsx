import { concertTemplate, exhibitionTemplate, sportsTemplate } from '../../utils/template';
import Button from '../common/Button';
import TemplateCard from './TemplateCard';

interface TemplateOptionProps {
  selectedTemplateType: string;
  setSelectedTemplateType: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>
}

export default function TemplateForm({
  selectedTemplateType,
  setSelectedTemplateType,
  handleSubmit,
}: TemplateOptionProps) {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6 py-4">
        <div>
          <TemplateCard
            name={concertTemplate.name}
            type={concertTemplate.type}
            description={concertTemplate.description}
            selectedTemplateType={selectedTemplateType}
            setSelectedTemplateType={setSelectedTemplateType}
          />
        </div>
        <div>
          <TemplateCard
            name={sportsTemplate.name}
            type={sportsTemplate.type}
            description={sportsTemplate.description}
            selectedTemplateType={selectedTemplateType}
            setSelectedTemplateType={setSelectedTemplateType}
          />
        </div>
        <div>
          <TemplateCard
            name={exhibitionTemplate.name}
            type={exhibitionTemplate.type}
            description={exhibitionTemplate.description}
            selectedTemplateType={selectedTemplateType}
            setSelectedTemplateType={setSelectedTemplateType}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">
          다음
        </Button>
      </div>
    </form>
  );
}

import TemplateForm from '../../components/deploy/TemplateForm';

export default function DeployPage() {
  const handleDeploy = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.template.value);
  };

  return (
    <main>
      <div>
        <h1 className="text-xl font-bold">배포 페이지</h1>
        <TemplateForm handleDeploy={handleDeploy} />
      </div>
    </main>
  );
}

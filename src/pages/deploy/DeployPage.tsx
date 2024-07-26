import { createNamespace, createPod } from '../../apis/deploy';
import TemplateForm from '../../components/deploy/TemplateForm';

export default function DeployPage() {
  const handleDeploy = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await createPod({ namespace: 'test1234', name: 'testname', port: 32011 });
    console.log(result);
  };

  const createns = async () => {
    const result = await createNamespace({ namespace: 'test1234' });
    console.log(result);
  };

  return (
    <main>
      <div>
        <h1 className="text-xl font-bold">배포 페이지</h1>
        <TemplateForm handleDeploy={handleDeploy} />
        <button
          type="button"
          onClick={createns}
        >
          테스트
        </button>
      </div>
    </main>
  );
}

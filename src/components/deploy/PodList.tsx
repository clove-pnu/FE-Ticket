import { PodInfo } from '../../utils/type';
import Pod from './Pod';

interface PodListProps {
  pods: PodInfo[];
}

export default function PodList({ pods }: PodListProps) {
  return (
    <div>
      <h1 className="text-xl font-bold">배포 중인 pod 목록</h1>
      <div className="mt-8 flex gap-4">
        <div className="w-40">네임스페이스</div>
        <div className="w-80">이름</div>
        <div>상태</div>
      </div>
      <ul className="flex flex-col gap-4 pb-8 pt-4">
        {pods.map(({ name, status, namespace }) => (
          <li key={`${namespace}-${name}`}>
            <Pod
              name={name}
              status={status}
              namespace={namespace}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

import { PodInfo } from '../../utils/type';
import Pod from './Pod';

interface PodListProps {
  pods: PodInfo[];
}

export default function PodList({ pods }: PodListProps) {
  return (
    <div>
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

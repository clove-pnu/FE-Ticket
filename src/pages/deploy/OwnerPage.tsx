import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PodInfo } from '../../utils/type';
import PodList from '../../components/deploy/PodList';

export default function OwnerPage() {
  const [podList, setPodList] = useState<PodInfo[]>([
    {
      name: 'test0',
      status: 'Running',
      namespace: 'testns0',
    },
    {
      name: 'test1',
      status: 'Running',
      namespace: 'testns0',
    },
  ]);

  return (
    <main>
      <div>
        <PodList pods={podList} />
        <div className="flex justify-end">
          <Link to="./deploy">
            <div className="rounded-md bg-zinc-700 px-6 py-2 text-white">
              배포
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

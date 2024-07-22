import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PodInfo } from '../../utils/type';
import PodList from '../../components/deploy/PodList';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { getPods } from '../../apis/deploy';

export default function OwnerPage() {
  const [podList, setPodList] = useState<PodInfo[]>([]);

  useEffect(() => {
    fetchWithHandler<PodInfo[]>(() => getPods({ namespace: 'default' }), {
      onSuccess: (response) => {
        setPodList(response.data);
      },
      onError: () => {
        alert('정보를 가져오는 데 실패하였습니다.');
      },
    });
  }, []);

  return (
    <main>
      <div>
        <PodList pods={[{
          name: 'test0',
          status: 'Running',
          namespace: 'testns0',
        },
        {
          name: 'test1',
          status: 'Running',
          namespace: 'testns0',
        }, ...podList]}
        />
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

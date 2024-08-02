import { useParams } from 'react-router-dom';
import CategoryTitle from '../../components/common/CategoryTitle';
import OwnerTab from '../../components/deploy/OwnerTab';
import PlayMonitor from '../../components/deploy/PlayMonitor';

export default function PlayMonitorPage() {
  const { pid } = useParams();

  return (
    <main>
      <CategoryTitle>공연 상세 정보</CategoryTitle>
      <OwnerTab
        pid={Number(pid)}
        current="PlayMonitor"
      />
      <PlayMonitor />
    </main>
  );
}

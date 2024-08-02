import { useParams } from 'react-router-dom';
import CategoryTitle from '../../components/common/CategoryTitle';
import OwnerTab from '../../components/deploy/OwnerTab';
import ServerMonitor from '../../components/deploy/ServerMonitor';

export default function ServerMonitorPage() {
  const { pid } = useParams();

  return (
    <main>
      <CategoryTitle>공연 상세 정보</CategoryTitle>
      <OwnerTab
        pid={Number(pid)}
        current="ServerMonitor"
      />
      <ServerMonitor />
    </main>
  );
}

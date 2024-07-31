import { Link } from 'react-router-dom';

interface OwnerTabProps {
  pid: number;
  current: 'PlayDetail' | 'PlayMonitor' | 'ServerMonitor' | 'PlayConfiguration';
}

export default function OwnerTab({
  pid,
  current,
}: OwnerTabProps) {
  return (
    <div className="flex flex-row p-4">
      <Link
        className={`p-3 ${current === 'PlayDetail' ? 'border-b-2 border-b-black' : ''}`}
        to={`/owner/playDetail/${pid}`}
      >
        공연 정보
      </Link>
      <Link
        className={`p-3 ${current === 'PlayMonitor' ? 'border-b-2 border-b-black' : ''}`}
        to={`/owner/playMonitor/${pid}`}
      >
        예매 현황 모니터링
      </Link>
      <Link
        className={`p-3 ${current === 'ServerMonitor' ? 'border-b-2 border-b-black' : ''}`}
        to={`/owner/serverMonitor/${pid}`}
      >
        공연 서버 모니터링
      </Link>
      <Link
        className={`p-3 ${current === 'PlayConfiguration' ? 'border-b-2 border-b-black' : ''}`}
        to={`/owner/playConfiguration/${pid}`}
      >
        공연 설정
      </Link>
    </div>
  );
}

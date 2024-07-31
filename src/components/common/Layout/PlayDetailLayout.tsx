import { Outlet, useParams } from 'react-router-dom';
import CategoryTitle from '../CategoryTitle';
import OwnerTab from '../../deploy/OwnerTab';

export default function PlayDetailLayout() {
  const { pid } = useParams();
  return (
    <div>
      <CategoryTitle>공연 상세 정보</CategoryTitle>
      <OwnerTab
        pid={Number(pid)}
        current="PlayDetail"
      />
      <Outlet />
    </div>
  );
}

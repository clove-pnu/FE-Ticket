import { DeployedPlayCardInfo } from '../../utils/type';

export default function DeployedPlayCard({
  pid,
  thumbnailUrl,
  title,
  playType,
  bookedSeatCount,
  totalSeatCount,
  status,
  deployDate,
}: DeployedPlayCardInfo) {
  return (
    <div className="flex flex-row items-center gap-12 p-4">
      <img className="h-40 w-28 bg-clove" src={thumbnailUrl} alt={`${title} 썸네일`} />
      <div className="flex grow flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="text-sm text-gray-700">{playType}</div>
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex flex-row gap-2">
            <p>예매 좌석 수</p>
            <p className="font-bold">{bookedSeatCount}</p>
            <p>/</p>
            <p>전체 좌석 수</p>
            <p className="font-bold">{totalSeatCount}</p>
          </div>
          <div className="font-bold">{status}</div>
          <div className="w-24 text-gray-700">{deployDate.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}

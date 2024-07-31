import { NumberToMoney } from '../../utils/convert';
import { DeployedPlayDetail } from '../../utils/type';
import ProgressBar from '../common/ProgressBar';

export default function PlayDetail({
  pid,
  thumbnailUrl,
  title,
  deployDate,
  bookingStartDate,
  bookingEndDate,
  status,
  bookedSeatCount,
  totalSeatCount,
}: DeployedPlayDetail) {
  return (
    <div className="flex flex-row gap-8 p-4">
      <img
        className="h-64 w-48 bg-clove"
        src={thumbnailUrl}
        alt={`${title} 썸네일`}
      />
      <div className="flex flex-col justify-between py-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-cgray">{deployDate.toLocaleDateString()}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>
            예매 시작일:
            {' '}
            {bookingStartDate.toLocaleDateString()}
          </p>
          <p>
            예매 종료일:
            {' '}
            {bookingEndDate.toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex grow flex-col items-end justify-between py-4">
        <p>{status}</p>
        <div className="flex w-80 flex-col items-end gap-2">
          <div className="flex w-full flex-row justify-between px-2">
            <p>예매 현황</p>
            <p>
              {NumberToMoney(bookedSeatCount)}
              {' '}
              /
              {' '}
              {NumberToMoney(totalSeatCount)}
            </p>
          </div>
          <ProgressBar
            current={bookedSeatCount}
            total={totalSeatCount}
          />
        </div>
      </div>
    </div>
  );
}

import { NumberToMoney } from '../../utils/convert';
import { TicketingPlayDetail } from '../../utils/type';
import LinkButton from '../common/LinkButton';

export default function PlayDetailHeader({
  pid,
  thumbnailUrl,
  title,
  bookingStartDate,
  bookingEndDate,
  bookedSeatCount,
  totalSeatCount,
  startDate,
  endDate,
  price,
  cast,
  venue,
}: TicketingPlayDetail) {
  return (
    <div className="flex flex-row gap-12 px-4 py-8">
      <img
        className="h-80 w-60 bg-clove"
        src={thumbnailUrl}
        alt={`${title} 썸네일`}
      />
      <div className="flex grow flex-row justify-between py-4">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="text-sm">
              <p>
                {startDate.toLocaleDateString()}
                {' '}
                ~
                {' '}
                {endDate.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>{venue}</p>
            <p>
              출연진:
              {' '}
              {cast}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-end">
          <div className="flex flex-row items-center gap-2">
            <p className="font-bold">
              {NumberToMoney(price)}
              {' '}
              원
            </p>
            <p className="text-sm">
              잔여
              {' '}
              {totalSeatCount - bookedSeatCount}
              {' '}
              석
            </p>
          </div>
        </div>
        <div className="flex flex-row items-end gap-8">
          <div className="flex flex-col gap-2 text-sm">
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
          <div className="font-bold">
            <LinkButton to="/">예매하기</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

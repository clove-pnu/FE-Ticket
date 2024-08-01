import { Ticket } from '../../utils/type';
import Button from '../common/Button';

interface TicketBasketProps {
  ticketList: Ticket[];
}

export default function TicketBasket({ ticketList }: TicketBasketProps) {
  return (
    <div className="flex grow flex-col p-4">
      <div className="py-4 text-2xl font-bold">선택한 좌석</div>
      <ul className="flex grow flex-col gap-4">
        {ticketList.map((t) => (
          <li
            key={t.seatInfo.sid}
            className="flex flex-row items-center justify-between py-4"
          >
            <div className="flex flex-row gap-4">
              <div>
                {t.seatInfo.site}
                {' '}
                구역
              </div>
              <div>
                {t.seatInfo.column}
                {' '}
                열
              </div>
              <div>
                {t.seatInfo.seatNumber}
                {' '}
                번
              </div>
            </div>
            <div className="text-xl font-bold">
              110,000
              {' '}
              원
            </div>
          </li>
        ))}
      </ul>
      {ticketList.length > 0 && (
        <div className="flex flex-row justify-between p-4 text-xl font-bold">
          <div>
            총
            {' '}
            {ticketList.length}
            {' '}
            개
          </div>
          <div>
            110,000
            {' '}
            원
          </div>
        </div>
      )}
      <div className="flex flex-col font-bold">
        <Button>예매하기</Button>
      </div>
    </div>
  );
}

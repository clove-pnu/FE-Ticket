import { useState } from 'react';
import CategoryTitle from '../../components/common/CategoryTitle';
import PlayDetailHeader from '../../components/ticket/PlayDetailHeader';
import Ticketing from '../../components/ticket/Ticketing';
import { Ticket } from '../../utils/type';
import TicketBasket from '../../components/ticket/TicketBasket';

export default function PlayTicketingPage() {
  const [ticketList, setTicketList] = useState<Ticket>(null);

  return (
    <main>
      <CategoryTitle>예매하기</CategoryTitle>
      <PlayDetailHeader
        type="compact"
        pid={0}
        thumbnailUrl=""
        title="공연 제목"
        bookingStartDate={new Date(2024, 0, 1)}
        bookingEndDate={new Date(2024, 0, 1)}
        bookedSeatCount={1000}
        totalSeatCount={1500}
        startDate={new Date(2024, 0, 1)}
        endDate={new Date(2024, 0, 1)}
        price={110000}
        cast="OOO, OOO"
        venue="공연장"
      />
      <div className="flex flex-row gap-4">
        <Ticketing
          ticketList={ticketList}
          setTicketList={setTicketList}
        />
        <TicketBasket ticketList={ticketList !== null ? [ticketList] : []} />
      </div>
    </main>
  );
}

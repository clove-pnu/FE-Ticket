import PlayDetailHeader from '../components/ticket/PlayDetailHeader';
import Ticketing from '../components/ticket/Ticketing';
import TicketBasket from '../components/ticket/TicketBasket';
import CategoryTitle from '../components/common/CategoryTitle';
import styles from './styles/PlayTicketingPage.module.css';

export default function PlayTicketingPage() {
  return (
    <main>
      <CategoryTitle>예매하기</CategoryTitle>
      <PlayDetailHeader
        type="full"
        id={0}
        image=""
        description="공연 설명"
        name="공연 제목"
        bookingStartDate={new Date(2024, 0, 1)}
        bookingEndDate={new Date(2024, 0, 1)}
        eventTime={new Date(2024, 0, 1, 3, 24)}
        startDate={new Date(2024, 0, 1)}
        endDate={new Date(2024, 0, 1)}
        seatsAndPrices="A1:$100,B1:$80"
        cast="OOO, OOO"
        venue="공연장"
      />
      <div className={styles.ticketingContainer}>
        <Ticketing
          seats={[{
            x: 220,
            y: 220,
            eventName: '테스트 공연',
            seatNumber: 'B50',
            isAvailable: true,
          },
          {
            x: 330,
            y: 330,
            eventName: '테스트 공연',
            seatNumber: 'A40',
            isAvailable: false,
          },
          ]}
        />
        <TicketBasket />
      </div>
    </main>
  );
}

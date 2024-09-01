import PlayDetailContent from '../components/ticket/PlayDetailContent';
import PlayDetailHeader from '../components/ticket/PlayDetailHeader';

export default function PlayDetailTicketingPage() {
  return (
    <main>
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
      <PlayDetailContent
        description="공연 소개 및 설명"
      />
    </main>
  );
}

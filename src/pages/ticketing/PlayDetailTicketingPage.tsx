import PlayDetailContent from '../../components/ticket/PlayDetailContent';
import PlayDetailHeader from '../../components/ticket/PlayDetailHeader';

export default function PlayDetailTicketingPage() {
  return (
    <main>
      <PlayDetailHeader
        type="full"
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
      <PlayDetailContent
        description="공연 소개 및 설명"
      />
    </main>
  );
}

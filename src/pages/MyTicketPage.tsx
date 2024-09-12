import CategoryTitle from '../components/common/CategoryTitle';
import MyTicketList from '../components/ticket/MyTicketList';

export default function MyTicketPage() {
  return (
    <main>
      <CategoryTitle>티켓 관리</CategoryTitle>
      <MyTicketList
        tickets={[
          {
            id: 1,
            seatNumber: 1,
            eventName: '시카고',
            section: 'A',
          },
          {
            id: 2,
            seatNumber: 1,
            eventName: '시카고',
            section: 'B',
          },
          {
            id: 3,
            seatNumber: 3,
            eventName: '시카고 2',
            section: 'A',
          },
        ]}
      />
    </main>
  );
}

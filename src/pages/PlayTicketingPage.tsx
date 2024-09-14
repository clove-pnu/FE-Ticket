import { Suspense, useEffect, useState } from 'react';
import PlayDetailHeader from '../components/ticket/PlayDetailHeader';
import Ticketing from '../components/ticket/Ticketing';
import TicketBasket from '../components/ticket/TicketBasket';
import CategoryTitle from '../components/common/CategoryTitle';
import styles from './styles/PlayTicketingPage.module.css';
import { TicketingPlayDetail } from '../utils/type';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getEvent } from '../apis/event';

export default function PlayTicketingPage() {
  const [playData, setPlayData] = useState<TicketingPlayDetail>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const { pathname } = window.location;
    const playName = pathname.split('/')[3];

    fetchWithHandler(() => getEvent(playName), {
      onSuccess: (response) => {
        setPlayData(response.data);
      },
      onError: () => {
        setError(true);
      },
    });
  }, []);

  if (error) {
    return (
      <main>
        오류가 발생했습니다. 다시 시도해주세요.
      </main>
    );
  }

  return (
    <main>
      <CategoryTitle>예매하기</CategoryTitle>
      <Suspense fallback={<div>Loading...</div>}>
        <PlayDetailHeader
          type="ticketing"
          data={playData}
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
      </Suspense>
    </main>
  );
}

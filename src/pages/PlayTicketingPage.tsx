import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayDetailHeader from '../components/ticket/PlayDetailHeader';
import Ticketing from '../components/ticket/Ticketing';
import TicketBasket from '../components/ticket/TicketBasket';
import CategoryTitle from '../components/common/CategoryTitle';
import styles from './styles/PlayTicketingPage.module.css';
import { TicketingPlayDetail } from '../utils/type';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getEvent } from '../apis/event';
import { getSeats } from '../apis/seat';
import { mockData } from '../mock/data';

export default function PlayTicketingPage() {
  const [playData, setPlayData] = useState<TicketingPlayDetail>(mockData);
  const [error, setError] = useState<boolean>(false);
  const { namespace, playName } = useParams();

  // useEffect(() => {
  //   fetchWithHandler(() => getEvent(namespace), {
  //     onSuccess: (response) => {
  //       setPlayData(response.data);
  //     },
  //     onError: () => {
  //       setError(true);
  //     },
  //   });

  //   fetchWithHandler(() => getSeats(playName), {
  //     onSuccess: (response) => {
  //       console.log(response);
  //     },
  //     onError: () => {

  //     },
  //   });
  // }, []);

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
            eventName={playName}
            venue={playData.venue}
            seats={[{
              section: 'R',
              seatNumber: 1,
              price: 15000,
              reservationStatus: 'NO',
              eventDate: '2024-01-03',
            },
            {
              section: 'R',
              seatNumber: 2,
              price: 15000,
              reservationStatus: 'NO',
              eventDate: '2024-01-03',
            },
            {
              section: 'S',
              seatNumber: 3,
              price: 15000,
              reservationStatus: 'NO',
              eventDate: '2024-01-03',
            },
            ]}
          />
          <TicketBasket />
        </div>
      </Suspense>
    </main>
  );
}

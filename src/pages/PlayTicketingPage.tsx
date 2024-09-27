import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayDetailHeader from '../components/ticket/PlayDetailHeader';
import { getEvent } from '../apis/event';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { TicketingPlayDetail } from '../utils/type';
import PlayDetailContent from '../components/ticket/PlayDetailContent';
import styles from './styles/PlayTicketingPage.module.css';
import Ticketing from '../components/ticket/Ticketing';
import TicketBasket from '../components/ticket/TicketBasket';

export default function PlayTicketingPage() {
  const [playData, setPlayData] = useState<TicketingPlayDetail>(null);
  const [error, setError] = useState<boolean>(false);
  const [isTicketing, setIsTicketing] = useState(false);
  const { namespace } = useParams();

  useEffect(() => {
    fetchWithHandler(() => getEvent(namespace), {
      onSuccess: (response) => {
        setPlayData(response.data[0]);
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
      <PlayDetailHeader
        type={`${isTicketing ? 'ticketing' : 'detail'}`}
        data={playData}
        setIsTicketing={setIsTicketing}
      />
      {isTicketing ? (
        <div className={styles.ticketingContainer}>
          <Ticketing
            eventTimeList={playData.eventTime}
            namespace={namespace}
            eventName={playData.name}
            venue={playData.venue}
          />
          <TicketBasket
            namespace={namespace}
          />
        </div>
      ) : (
        <PlayDetailContent
          data={playData?.description}
        />
      )}
    </main>
  );
}

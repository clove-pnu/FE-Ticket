import { useEffect, useState } from 'react';
import PlayDetailHeader from '../components/ticket/PlayDetailHeader';
import { getEvent } from '../apis/event';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { TicketingPlayDetail } from '../utils/type';
import PlayDetailContent from '../components/ticket/PlayDetailContent';

export default function PlayDetailTicketingPage() {
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
      <PlayDetailHeader
        type="detail"
        data={playData}
      />
      <PlayDetailContent
        data={playData?.description}
      />
    </main>
  );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayDetailHeader from '../components/ticket/PlayDetailHeader';
import { getEvent } from '../apis/event';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { TicketingPlayDetail } from '../utils/type';
import PlayDetailContent from '../components/ticket/PlayDetailContent';
import { mockData } from '../mock/data';

export default function PlayDetailTicketingPage() {
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

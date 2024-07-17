import { PlayCardInfo } from '../../utils/type';
import PlayCard from './PlayCard';

interface PlayListProps {
  PlayCards: PlayCardInfo[];
}

export default function PlayList({ PlayCards }: PlayListProps) {
  return (
    <ul className="flex flex-wrap gap-4">
      {PlayCards.map(({
        pid,
        thumbnailUrl,
        title,
        location,
        startDate,
        endDate,
      }) => (
        <li
          key={pid}
          className="p-4"
        >
          <PlayCard
            pid={pid}
            thumbnailUrl={thumbnailUrl}
            title={title}
            location={location}
            startDate={startDate}
            endDate={endDate}
          />
        </li>
      ))}
    </ul>
  );
}

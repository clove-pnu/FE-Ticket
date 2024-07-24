import { PlayCardInfo } from '../../utils/type';
import PlayCard from './PlayCard';

interface PlayListProps {
  PlayCards: PlayCardInfo[];
}

export default function PlayList({ PlayCards }: PlayListProps) {
  return (
    <ul className="flex flex-wrap gap-16">
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

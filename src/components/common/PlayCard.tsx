import { Link } from 'react-router-dom';
import { PlayCardInfo } from '../../utils/type';

export default function PlayCard({
  pid,
  thumbnailUrl,
  title,
  location,
  startDate,
  endDate,
}: PlayCardInfo) {
  return (
    <Link to={`/example/${pid}`}>
      <div className="flex flex-col gap-2">
        <div className="h-80 w-56 bg-gray-300">
          <img src={thumbnailUrl} alt={`${title} 포스터`} />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-col">
          <div>{location}</div>
          <div className="flex gap-2">
            <div>{startDate.toLocaleDateString()}</div>
            <div>~</div>
            <div>{endDate.toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

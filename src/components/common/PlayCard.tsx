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
        <div className="h-80 w-60 bg-clove">
          <img src={thumbnailUrl} alt={`${title} 포스터`} />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div>{location}</div>
          <div className="flex gap-2 text-black/50">
            <p>{startDate.toLocaleDateString()}</p>
            <p>~</p>
            <p>{endDate.toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

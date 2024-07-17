import { Link } from 'react-router-dom';
import { PodInfo } from '../../utils/type';

export default function Pod({ name, status, namespace }: PodInfo) {
  return (
    <div className="flex gap-4">
      <div className="w-40">{namespace}</div>
      <div className="w-80">
        <Link to={`/owner/podDetail/${name}`}>
          {name}
        </Link>
      </div>
      <div>{status}</div>
    </div>
  );
}

import { PodInfo } from '../../utils/type';

export default function Pod({ name, status, namespace }: PodInfo) {
  return (
    <div className="flex gap-4">
      <div className="w-40">{namespace}</div>
      <div className="w-80">{name}</div>
      <div>{status}</div>
    </div>
  );
}

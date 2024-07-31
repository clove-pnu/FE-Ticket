interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="h-4 w-full rounded-full border border-clove-light">
      <div
        className="h-full rounded-l-full bg-clove"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}

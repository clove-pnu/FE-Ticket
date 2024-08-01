interface PlayDetailContentProps {
  description: string;
}

export default function PlayDetailContent({
  description,
}: PlayDetailContentProps) {
  return (
    <div className="px-4">
      {description}
    </div>
  );
}

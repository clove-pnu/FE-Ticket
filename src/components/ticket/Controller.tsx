interface ControllerProps {
  setZoom: React.Dispatch<React.SetStateAction<number>>
}

export default function Controller({ setZoom }: ControllerProps) {
  return (
    <div
      className="absolute right-4 top-4 flex flex-col gap-1"
    >

      <button
        type="button"
        className="size-8 border border-black bg-cgray"
        onClick={() => setZoom((prev) => (prev < 200 ? prev + 25 : prev))}
        onMouseDown={(e) => e.stopPropagation()}
      >
        +
      </button>
      <button
        type="button"
        className="size-8 border border-black bg-cgray"
        onClick={() => setZoom((prev) => (prev > 100 ? prev - 25 : prev))}
        onMouseDown={(e) => e.stopPropagation()}
      >
        -
      </button>
    </div>
  );
}

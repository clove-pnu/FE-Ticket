import { useState } from 'react';
import Controller from './Controller';
import Seat from './Seat';
import { Ticket } from '../../utils/type';

interface WindowPosition {
  x: number;
  y: number;
}

interface TicketingProps {
  ticketList: Ticket;
  setTicketList: React.Dispatch<React.SetStateAction<Ticket>>
}

export default function Ticketing({ ticketList, setTicketList }: TicketingProps) {
  const [zoom, setZoom] = useState<number>(100);
  const [position, setPosition] = useState<WindowPosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartPosition, setDragStartPosition] = useState<WindowPosition>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) {
      return;
    }

    const x = e.clientX - dragStartPosition.x;
    const y = e.clientY - dragStartPosition.y;

    setPosition({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative size-[640px] overflow-hidden bg-no-repeat"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="absolute size-full bg-contain bg-[50%_center] bg-no-repeat"
        style={{ transform: `translate(${(position.x / zoom) * 100}px, ${(position.y / zoom) * 100}px)` }}
      >
        <svg
          className="absolute size-full origin-center bg-contain bg-[50%_center] bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/0.png")',
            transform: `scale(${zoom / 100})`,
          }}
        >
          <Seat
            x={220}
            y={200}
            setTicketList={setTicketList}
            isSelected={false}
          />
          <Seat
            x={200}
            y={200}
            setTicketList={setTicketList}
            isSelected={ticketList !== null}
          />
        </svg>
      </div>
      <div className="relative">
        <Controller
          setZoom={setZoom}
        />
      </div>
    </div>
  );
}

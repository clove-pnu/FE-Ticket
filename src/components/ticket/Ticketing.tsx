import { useState } from 'react';
import Controller from './Controller';
import Seat from './Seat';
import { SeatInfo } from '../../utils/type';
import styles from '../styles/Ticketing.module.css';

interface WindowPosition {
  x: number;
  y: number;
}

interface TicketingProps {
  seats: SeatInfo[];
}

export default function Ticketing({ seats }: TicketingProps) {
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
      className={styles.container}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={styles.content}
        style={{ transform: `translate(${(position.x / zoom) * 100}px, ${(position.y / zoom) * 100}px)` }}
      >
        <svg
          className={styles.background}
          style={{
            backgroundImage: 'url("/assets/0.png")',
            transform: `scale(${zoom / 100})`,
          }}
        >
          {seats.map(({
            x, y, eventName, seatNumber, isAvailable,
          }) => (
            <Seat
              key={`${eventName}-${seatNumber}`}
              x={x}
              y={y}
              eventName={eventName}
              seatNumber={seatNumber}
              isAvailable={isAvailable}
            />
          ))}
        </svg>
      </div>
      <div className={styles.controller}>
        <Controller
          setZoom={setZoom}
        />
      </div>
    </div>
  );
}

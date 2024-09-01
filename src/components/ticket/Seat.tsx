import { useState } from 'react';
import { SeatInfo } from '../../utils/type';
import useTicketDispatch from '../../hooks/useTicketDispatch';

export default function Seat({
  x,
  y,
  eventName,
  seatNumber,
  isAvailable,
}: SeatInfo) {
  const [isSelected, setIsSelected] = useState(false);
  const ticketDispatch = useTicketDispatch();

  const handleSelect = () => {
    ticketDispatch({
      type: 'ADD',
      payload: {
        eventName,
        seatNumber,
      },
    });
    setIsSelected(true);
  };

  const handleUnSelect = () => {
    ticketDispatch({
      type: 'REMOVE',
      payload: {
        eventName,
        seatNumber,
      },
    });
    setIsSelected(false);
  };

  if (!isAvailable) {
    return (
      <circle
        cx={x}
        cy={y}
        r={8}
        fill="var(--color-gray)"
        strokeWidth={1}
      />
    );
  }

  if (!isSelected) {
    return (
      <circle
        cx={x}
        cy={y}
        r={8}
        fill="var(--color-blue)"
        stroke="#000"
        strokeWidth={1}
        onClick={handleSelect}
      />
    );
  }

  return (
    <circle
      cx={x}
      cy={y}
      r={8}
      fill="var(--color-green)"
      stroke="#000"
      strokeWidth={1}
      onClick={handleUnSelect}
    />
  );
}

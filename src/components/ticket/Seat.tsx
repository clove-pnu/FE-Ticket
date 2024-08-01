import { Ticket } from '../../utils/type';

interface SeatInfo {
  x: number;
  y: number;
  setTicketList: React.Dispatch<React.SetStateAction<Ticket>>
  isSelected: boolean;
}

export default function Seat({
  x,
  y,
  setTicketList,
  isSelected,
}: SeatInfo) {
  return (
    <circle
      cx={x}
      cy={y}
      r={8}
      fill={`${isSelected ? '#94f692' : '#567ace'}`}
      stroke={`${isSelected && '#000'}`}
      strokeWidth={1}
      onClick={() => {
        if (isSelected) {
          setTicketList(null);
          return;
        }

        setTicketList({
          seatInfo: {
            sid: 0,
            site: 'A',
            column: 12,
            seatNumber: 8,
          },
        });
      }}
    />
  );
}

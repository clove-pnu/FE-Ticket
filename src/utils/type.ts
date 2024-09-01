export interface Ticket {
  eventName: string;
  seatNumber: string;
}

export interface TicketAction {
  type: 'ADD' | 'REMOVE';
  payload: Ticket;
}

export interface TicketingPlayDetail {
  id: number;
  name: string;
  image: string;
  cast: string;
  description: string;
  venue: string;
  seatsAndPrices: string;
  eventTime: Date;
  startDate: Date;
  endDate: Date;
  bookingStartDate: Date;
  bookingEndDate: Date;
}

export interface SeatInfo {
  x: number;
  y: number;
  eventName: string;
  seatNumber: string;
  isAvailable: boolean;
}

export interface Ticket {
  eventName: string;
  seatNumber: string;
}

export interface TicketAction {
  type: 'ADD' | 'REMOVE';
  payload: Ticket;
}

export interface SeatsAndPrices {
  id: number;
  section: string;
  price: number;
  count: number;
}

export interface TicketingPlayDetail {
  id: number;
  name: string;
  image: string;
  cast: string;
  description: string;
  venue: string;
  seatsAndPrices: SeatsAndPrices[];
  eventTime: Date[];
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

export interface ReservedTicket {
  id: number;
  seatNumber: number;
  eventName: string;
  section: string;
}

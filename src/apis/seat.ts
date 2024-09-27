import axios from 'axios';
import { getAccessToken } from '../utils/token';

export function getSeats(namespace: string) {
  return axios.get(`/${namespace}/seat`, {
    headers: {
      Authorization: getAccessToken(),
    },
  });
}

export function buySeats({
  namespace,
  ticket,
}: {
  namespace: string;
  ticket: {
    eventName: string;
    section: string;
    seatNumber: number;
    price: number;
    eventTime: string;
  }
}) {
  return axios.post(`/${namespace}/seat/buy`, ticket, {
    headers: {
      Authorization: getAccessToken(),
    },
  });
}

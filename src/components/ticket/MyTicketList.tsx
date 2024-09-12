import { ReservedTicket } from '../../utils/type';
import styles from '../styles/MyTicketList.module.css';

interface MyTicketListProps {
  tickets: ReservedTicket[];
}

export default function MyTicketList({ tickets }: MyTicketListProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.ticketList}>
        {tickets.map(({
          id, seatNumber, eventName, section,
        }) => (
          <li
            key={id}
            className={styles.ticket}
          >
            <div>
              <div className={styles.eventName}>{eventName}</div>
              <div className={styles.infoContainer}>
                <div>구역</div>
                <div>{section}</div>
              </div>
              <div className={styles.infoContainer}>
                <div>좌석번호</div>
                <div>{seatNumber}</div>
              </div>
            </div>
            <div className={styles.cancelContainer}>
              <button
                type="button"
                className={styles.cancel}
              >
                예매 취소
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

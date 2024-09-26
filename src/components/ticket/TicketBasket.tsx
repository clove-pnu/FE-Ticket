import useTicket from '../../hooks/useTicket';
import Button from '../common/Button';
import styles from '../styles/TicketBasket.module.css';

export default function TicketBasket() {
  const tickets = useTicket();

  return (
    <div className={styles.container}>
      <div className={styles.title}>선택한 좌석</div>
      <ul className={styles.ticketList}>
        {tickets && tickets.map(({
          eventName,
          section,
          seatNumber,
          price,
          eventDate,
        }) => (
          <li
            key={`${eventName}-${seatNumber}`}
            className={styles.ticketInfo}
          >
            <div>
              {eventDate}
            </div>
            <div>
              {section}
            </div>
            <div>
              {seatNumber}
            </div>
            <div className={styles.price}>
              {price}
              {' '}
              원
            </div>
          </li>
        ))}
      </ul>
      {tickets && tickets.length > 0 && (
        <div className={styles.total}>
          <div>
            총
            {' '}
            {tickets.length}
            {' '}
            개
          </div>
          <div>
            110,000
            {' '}
            원
          </div>
        </div>
      )}
      <div className={styles.book}>
        <Button>예매하기</Button>
      </div>
    </div>
  );
}

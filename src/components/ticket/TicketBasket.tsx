import useTicket from '../../hooks/useTicket';
import { numberToMoney } from '../../utils/convert';
import Button from '../common/Button';
import styles from '../styles/TicketBasket.module.css';

export default function TicketBasket() {
  const tickets = useTicket();

  return (
    <div className={styles.container}>
      <div className={styles.title}>선택한 좌석</div>
      <div className={styles.header}>
        <div className={styles.eventDate}>
          공연 일자
        </div>
        <div className={styles.section}>
          구역
        </div>
        <div className={styles.seatNumber}>
          좌석 번호
        </div>
        <div className={styles.price}>
          가격
        </div>
      </div>
      <ul className={styles.ticketList}>
        {tickets && tickets.map(({
          eventName,
          section,
          seatNumber,
          price,
          eventDate,
        }) => (
          <li
            key={`${eventDate}-${section}-${seatNumber}`}
            className={styles.ticketInfo}
          >
            <div className={styles.eventDate}>
              {eventDate}
            </div>
            <div className={styles.section}>
              {section}
            </div>
            <div className={styles.seatNumber}>
              {seatNumber}
            </div>
            <div className={styles.ticketPrice}>
              {numberToMoney(price)}
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
            매
          </div>
          <div>
            {numberToMoney(tickets.reduce((acc, cur) => acc + cur.price, 0))}
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

import { TicketingPlayDetail } from '../../utils/type';
import LinkButton from '../common/LinkButton';
import styles from '../styles/PlayDetailHeader.module.css';

interface PlayDetailHeaderProps extends TicketingPlayDetail {
  type: 'full' | 'compact';
}

export default function PlayDetailHeader({
  type,
  id,
  image,
  name,
  eventTime,
  bookingStartDate,
  bookingEndDate,
  startDate,
  endDate,
  cast,
  venue,
  seatsAndPrices,
}: PlayDetailHeaderProps) {
  if (type === 'full') {
    return (
      <div className={styles.container}>
        <img
          className={styles.thumbnail}
          src={image}
          alt={`${name} 썸네일`}
        />
        <div className={styles.contentContainer}>
          <div className={styles.left}>
            <div className={styles.titleDate}>
              <h1 className={styles.title}>{name}</h1>
              <div className={styles.date}>
                <p>
                  {startDate.toLocaleDateString()}
                  {' '}
                  ~
                  {' '}
                  {endDate.toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={styles.venueCast}>
              <p>{venue}</p>
              <p>
                출연진:
                {' '}
                {cast}
              </p>
            </div>
            <div>
              <div className={styles.eventTimeTitle}>회차정보</div>
              <ul>
                {eventTime.map((evt, index) => (
                  <li
                    key={evt.toLocaleTimeString()}
                    className={styles.eventTime}
                  >
                    {index + 1}
                    회차:
                    {' '}
                    {evt.toLocaleTimeString()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.middle}>
            <div>
              <div className={styles.priceTitle}>좌석 별 가격</div>
              <ul>
                {seatsAndPrices.map(({ id: sectionId, section, price }) => (
                  <li
                    key={sectionId}
                    className={styles.price}
                  >
                    {section}
                    {' '}
                    구역:
                    {' '}
                    {price}
                    {' '}
                    원
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.bookingDate}>
              <p>
                예매 시작일:
                {' '}
                {bookingStartDate.toLocaleDateString()}
              </p>
              <p>
                예매 종료일:
                {' '}
                {bookingEndDate.toLocaleDateString()}
              </p>
            </div>
            <div className={styles.book}>
              <LinkButton to="./ticketing">예매하기</LinkButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'compact') {
    return (
      <div className="flex flex-row gap-12 px-4 py-8">
        <img
          className="h-48 w-36 bg-clove"
          src={image}
          alt={`${name} 썸네일`}
        />
        <div className="flex flex-row items-center">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{name}</h1>
              <div className="text-sm">
                <p>
                  {startDate.toLocaleDateString()}
                  {' '}
                  ~
                  {' '}
                  {endDate.toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex grow flex-col justify-end gap-4">
              <p>{venue}</p>
              <p>
                출연진:
                {' '}
                {cast}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

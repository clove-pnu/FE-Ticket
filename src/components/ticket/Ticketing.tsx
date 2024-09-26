import {
  MiniMap, TransformComponent, TransformWrapper, useControls,
} from 'react-zoom-pan-pinch';
import Seat from './Seat';
import { SeatInfo } from '../../utils/type';
import styles from '../styles/Ticketing.module.css';
import { venueData } from '../../data/venue';

interface TicketingProps {
  eventName: string;
  venue: string;
  seats: SeatInfo[];
}

function Controller() {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className={styles.controllerContainer}>
      <button type="button" onClick={() => zoomIn()}>+</button>
      <button type="button" onClick={() => zoomOut()}>-</button>
      <button type="button" onClick={() => resetTransform()}>reset</button>
    </div>
  );
}

export default function Ticketing({ eventName, venue, seats }: TicketingProps) {
  const currentVenue = venueData.find((v) => v.name === venue);

  return (
    <div className={styles.container}>
      <TransformWrapper
        doubleClick={{
          disabled: true,
        }}
        minScale={0.5}
        maxScale={4}
        limitToBounds={false}
      >
        {({
          zoomIn, zoomOut, resetTransform, ...rest
        }) => (
          <>
            <Controller />
            <TransformComponent>
              <img
                src={`${currentVenue.backgroundImage}`}
                alt="공연장 이미지"
                style={{
                  width: currentVenue.imageSize.width,
                  height: currentVenue.imageSize.height,
                }}
              />
              <svg className={styles.seat}>
                {seats.map(({
                  section,
                  seatNumber,
                  price,
                  reservationStatus,
                  eventDate,
                }) => {
                  const { x, y } = currentVenue
                    .sections
                    .find((s) => s.sectionName === section)
                    .seats[seatNumber - 1];

                  return (
                    <Seat
                      key={`${eventDate}-${section}-${seatNumber}`}
                      eventName={eventName}
                      x={x}
                      y={y}
                      section={section}
                      seatNumber={seatNumber}
                      price={price}
                      reservationStatus={reservationStatus}
                      eventDate={eventDate}
                    />
                  );
                })}
              </svg>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}

import { PlayDescription } from '../../utils/type';
import styles from '../styles/PlayDetailContent.module.css';

interface PlayDetailContentProps {
  data: PlayDescription;
}

export default function PlayDetailContent({ data }: PlayDetailContentProps) {
  if (!data) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        {data.text.map((text, index) => (
          <div
            key={`${text}-${index}`}
            className={styles.text}
          >
            {text}
          </div>
        ))}
      </div>
      <img
        src={data.image}
        alt="공연 설명 이미지"
        className={styles.image}
      />
    </div>
  );
}

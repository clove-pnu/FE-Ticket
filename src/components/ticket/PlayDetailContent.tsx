import styles from '../styles/PlayDetailContent.module.css';

interface PlayDetailContentProps {
  description: string;
}

export default function PlayDetailContent({
  description,
}: PlayDetailContentProps) {
  return (
    <div className={styles.content}>
      {description}
    </div>
  );
}

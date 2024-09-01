import styles from '../styles/Controller.module.css';

interface ControllerProps {
  setZoom: React.Dispatch<React.SetStateAction<number>>
}

export default function Controller({ setZoom }: ControllerProps) {
  return (
    <div
      className={styles.container}
    >

      <button
        type="button"
        className={styles.button}
        onClick={() => setZoom((prev) => (prev < 200 ? prev + 25 : prev))}
        onMouseDown={(e) => e.stopPropagation()}
      >
        +
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => setZoom((prev) => (prev > 100 ? prev - 25 : prev))}
        onMouseDown={(e) => e.stopPropagation()}
      >
        -
      </button>
    </div>
  );
}

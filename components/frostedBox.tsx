import styles from '../styles/frostedBox.module.css'

type FrostedBoxProps = {
  buttonLabel: string;
  description: string;
  onButtonClick: () => void;
}

export function FrostedBox({buttonLabel, description, onButtonClick}: FrostedBoxProps) {

  return (
    <div className={styles.box}>
      <div className={styles.boxChildren}>
        <p className={styles.description}>
          {description}
        </p>
        <button 
          className={styles.button}
          onClick={onButtonClick}
        >{buttonLabel}</button>
      </div>
    </div>
  )
}
import styles from './styles.module.scss'

interface IButton {
  type: 'primary' | 'secondary'
  onClick: () => void
  title: string
}

function Button({ type, onClick, title }: IButton) {
  return (
    <div onClick={onClick} className={styles[type]}>
      {title}
    </div>
  )
}

export default Button

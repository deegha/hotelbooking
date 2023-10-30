import styles from './card.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface ICard {
  url: string
  picture: string
  title: string
  rating: number
  numberOfNights: number
  numberOfAdults: number
  numberOfChildren: number
  totalPrice: number
  amenities: Array<{
    name: string
  }>
}

function Card({
  url,
  picture,
  title,
  rating,
  numberOfAdults,
  numberOfChildren,
  numberOfNights,
  totalPrice,
  amenities,
}: ICard) {
  return (
    <Link href={url} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image
            className={styles.image}
            src={picture}
            width={300}
            height={225}
            alt={title}
          />
          <div className={styles.detailSection}>
            <h1 className={styles.title}>
              {title} <span className={styles.rating}>{rating}</span>
            </h1>
            <div className={styles.infoSection}>
              <div className={styles.infoRow}>
                {amenities.map((amenity) => (
                  <span className={styles.amenity} key={amenity.name}>
                    {amenity.name}
                  </span>
                ))}
              </div>
              <div className={styles.infoRow}>
                <span>{numberOfNights} Nights</span>
                {numberOfAdults > 0 && <span>{numberOfAdults} adults</span>}
                {numberOfChildren > 0 && (
                  <span>{numberOfChildren} children</span>
                )}
              </div>
            </div>
            <div className={styles.price}>LKR {totalPrice}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card

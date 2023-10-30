import styles from './styles.module.scss'
import { SearchBar, Card } from '@/components'

const popular = [
  {
    url: 'thurya-homagama',
    picture:
      'https://res.cloudinary.com/duqpgdc9v/image/upload/v1696509889/CeylonHotelsHub/t5arkddbipvn5o96pxvt.jpg',
    title: 'Thrya homagama',
    rating: 9,
    numberOfNights: 2,
    numberOfAdults: 2,
    numberOfChildren: 0,
    totalPrice: 66000,
    amenities: [{ name: 'pool' }, { name: 'wifi' }, { name: 'hot water' }],
  },
  {
    url: 'kingsbury-colombo',
    picture:
      'https://res.cloudinary.com/duqpgdc9v/image/upload/v1696509885/CeylonHotelsHub/zo1xlfdcellh4hiehcty.jpg',
    title: 'Kingsburry-colombo',
    rating: 9,
    numberOfNights: 2,
    numberOfAdults: 2,
    numberOfChildren: 0,
    totalPrice: 66000,
    amenities: [{ name: 'pool' }, { name: 'wifi' }],
  },
]

//this is a testing comment

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBar />
        <div className={styles.imageArea}>
          <h2 className={styles.sectiontitle}>Popular hotels</h2>
          {popular.map((item) => (
            <Card key={item.url} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

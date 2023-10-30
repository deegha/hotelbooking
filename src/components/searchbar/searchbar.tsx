'use client'
import 'rsuite/dist/rsuite.min.css'

import styles from './styles.module.scss'
import { DateRangePicker } from 'rsuite'
import Button from 'rsuite/Button'
import { InputNumber, AutoComplete } from 'rsuite'

const data = ['Balangoda', 'Chilaw', 'Gale']

function SearchBar() {
  return (
    <div className={styles.container}>
      <h1>Find your vacation stay</h1>
      <div className={styles.searchBox}>
        <div className={styles.block}>
          <div className={styles.blockLabel}>Location</div>
          <AutoComplete data={data} size="lg" />
        </div>

        <div className={styles.block}>
          <div className={styles.blockLabel}>Check in - check out</div>
          <DateRangePicker
            size="lg"
            placeholder="Select check in and out dates"
          />
        </div>

        <div className={styles.block}>
          <div className={styles.blockLabel}>No Adults</div>
          <InputNumber size="lg" />
        </div>
        <div className={styles.block}>
          <div className={styles.blockLabel}>No Children</div>
          <InputNumber size="lg" />
        </div>
        <div>
          <Button
            size="lg"
            color="orange"
            appearance="primary"
            onClick={() => console.log('here')}
            title="Search"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar

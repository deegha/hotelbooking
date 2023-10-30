'use client'

import styles from './styles.module.scss'
import { Button } from '..'

function SearchBar() {
  return (
    <div className={styles.container}>
      <h1>Find your vacation stay</h1>
      <div className={styles.searchBox}>
        <div className={styles.block}>
          <div className={styles.blockLabel}>Location</div>
          <div className={styles.input}>
            <input />
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockLabel}>Check in</div>
          <div className={styles.input}>
            <input />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.blockLabel}>Check out</div>
          <div className={styles.input}>
            <input />
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockLabel}>Guests</div>
          <div className={styles.input}>
            <input />
          </div>
        </div>

        <div>
          <Button
            onClick={() => console.log('here')}
            type="primary"
            title="Search"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar

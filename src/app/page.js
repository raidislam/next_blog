import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo autem vitae possimus cum velit illum architecto delectus atque repudiandae?</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className={styles.brands}>
        <Image src={'/hero.gif'} fill alt='home'/>
      </div>
    </div>
  )
}

export default Home
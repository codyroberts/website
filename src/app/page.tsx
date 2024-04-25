"use client"

import styles from './page.module.scss'
import Image from 'next/image'
import me from "../../public/images/me.jpg"

export default function Page() {
    return (
    <div className={styles.page}>
      <Image 
      className={styles.portrait}
      src={me}
      alt="It's me!" />
      <p className={styles.text}>
        Hello, my name's Cody! I'm a full stack engineer who recently graduated with a master's degree in Computer Science and Software Engineering from Auburn University.
        <br></br>
        <br></br>
        I live in Missouri with my girlfriend and our many pets. Some of my favorite hobbies are painting miniatures, game development, driving RC cars, and doing yo-yo tricks.
      </p>
    </div>
    )
}
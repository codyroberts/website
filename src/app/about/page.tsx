import styles from './about.module.scss'

export default function Home() {
  return (
    <div className={styles.about}>
      <p className={styles.text}>
        Hello, my name's Cody! I'm a full stack engineer who recently graduated with a master's degree in Computer Science and Software Engineering from Auburn University.
        <br></br>
        <br></br>
        I live in Missouri with my girlfriend and our many pets. Some of my favorite hobbies are painting miniatures, game development, driving RC cars, and doing yo-yo tricks.
      </p>
    </div>
  )
}

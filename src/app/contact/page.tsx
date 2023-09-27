import styles from './contact.module.scss'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.contact}>
      <p>
        Cool links to get ahold of me:
        <br></br>
        <br></br>
        <Link href="mailto:codyaaronroberts@gmail.com">Shoot me an email</Link>
        <br></br>
        <Link href="https://www.linkedin.com/in/cody-aaron-roberts/">Find me on LinkedIn</Link>
        <br></br>
        <Link href="https://www.github.com/codyroberts/">Check out my projects on Github</Link>
        <br></br>
      </p>
    </div>
  )
}

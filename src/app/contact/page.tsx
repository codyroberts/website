import styles from './contact.module.scss'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactItem}>
            <p className={styles.text}>Shoot me an</p><Link className={styles.contactLink} href="mailto:codyaaronroberts@gmail.com"><span>e</span><span>m</span><span>a</span><span>i</span><span>l</span></Link>
      </div>
      <div className={styles.contactItem}>
            <p className={styles.text}>Find me on</p><Link className={styles.contactLink} href="https://www.linkedin.com/in/cody-aaron-roberts/"><span>L</span><span>i</span><span>n</span><span>k</span><span>e</span><span>d</span><span>I</span><span>n</span></Link>
      </div>
      <div className={styles.contactItem}>      
            <p className={styles.text}>Check out my projects on</p><Link className={styles.contactLink} href="https://www.github.com/codyroberts/"><span>G</span><span>i</span><span>t</span><span>h</span><span>u</span><span>b</span></Link>
      </div>
    </div>
  )
}

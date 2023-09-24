import MenuButton from '../components/menuButton'
import Logo from '../components/logo'
import Navigation from '../components/navigation'
import styles from './about.module.scss'

export default function Home() {
  return (
    <div className={styles.about}>
      <header>

        <Logo />
        <MenuButton />
        <Navigation />
        
      </header>
    </div>
  )
}

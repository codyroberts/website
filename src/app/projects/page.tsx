import MenuButton from '../components/menuButton'
import Logo from '../components/logo'
import Navigation from '../components/navigation'
import styles from './projects.module.scss'

export default function Home() {
  return (
    <div className={styles.projects}>
      <header>

        <Logo />
        <MenuButton />
        <Navigation />
        
      </header>
    </div>
  )
}

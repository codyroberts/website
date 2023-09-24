'use client'

import styles from "./styles/menuButton.module.scss"

interface Props {
    showNavigation: boolean,
    onClick: () => void
  }

export const MenuButton: React.FC<Props> = (props) => {

    return (
        <div onClick={props.onClick} className={styles.menuButton}>
            {
                !props.showNavigation ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" className={styles.icons} id={styles.menuIcon}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" className={styles.icons} id={styles.closeIcon}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
            }
            </div>
    )

}
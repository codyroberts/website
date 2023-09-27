'use client'

import styles from "./styles/navigation.module.scss"
import Link from "next/link"

interface Props {
    showNavigation: boolean,
    onNavigationClicked: () => void
  }

export const Navigation: React.FC<Props> = (props) => {

    let links = ["Home", "About", "Projects", "Contact"]

    return (
        <nav className={`${styles.navigation}  ${props.showNavigation ? styles.open : ""}`}>
            {links.map(link => (
                <Link key={link} onClick = {props.onNavigationClicked} href={link.toLowerCase()}>{link}</Link>
            ))}
        </nav>
    )
}
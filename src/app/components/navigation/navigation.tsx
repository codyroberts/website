'use client'

import styles from "./navigation.module.scss"
import Link from "next/link"

interface Props {
    showNavigation: boolean,
    onNavigationClicked: () => void
  }

export const Navigation: React.FC<Props> = (props) => {

    const links = ["Projects", "Contact"]

    return (
        <nav className={`${styles.navigation}  ${props.showNavigation ? styles.open : ""}`}>
            {links.map(link => (
                <Link key={link} onClick = {props.onNavigationClicked} href={link.toLowerCase()}>{link}</Link>
            ))}
        </nav>
    )
}
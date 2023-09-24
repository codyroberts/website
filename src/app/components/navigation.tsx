'use client'

import styles from "./styles/navigation.module.scss"
import Link from "next/link"

interface Props {
    showNavigation: boolean,
  }

export const Navigation: React.FC<Props> = (props) => {

    return (
        <nav className={`${styles.navigation}  ${props.showNavigation ? styles.open : ""}`}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}
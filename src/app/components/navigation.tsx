'use client'

import styles from "./styles/navigation.module.scss"
import Link from "next/link"

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}
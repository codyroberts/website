'use client'

import React, { useState } from "react";
import styles from "./styles/Header.module.scss"
import { Logo } from "./logo";
import { MenuButton } from "./menuButton";
import { Navigation } from "./navigation";

export const Header: React.FC = () => {
    const [showNavigation, setShowNavigation] = useState(false)

    function clickHandler() {
      setShowNavigation(!showNavigation)
    }

    return (
        <header>

          <Logo />
          <MenuButton onClick={clickHandler} showNavigation = {showNavigation} />
          <Navigation showNavigation = {showNavigation} onNavigationClicked={clickHandler}/>
        
      </header>
    )
}
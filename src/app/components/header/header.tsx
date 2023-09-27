'use client'

import React, { useState } from "react";
import styles from "./header.module.scss"
import { Logo } from "../logo/logo";
import { MenuButton } from "../menuButton/menuButton";
import { Navigation } from "../navigation/navigation";

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
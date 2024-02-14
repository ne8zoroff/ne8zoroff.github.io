import React from "react";
import  s from "./Header.module.scss"
import Logo from '../../image/header-logo.svg'
import Time from '../../image/header-time.png'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <div className={s.header__logo}>
                    <img src={Logo} alt={s.Logo} />
                </div>
                <div className={s.header__title}>
                    <h1>NetWork</h1>
                </div>
                <div className={s.header__time}>
                    <img src={Time} alt={'Time'} />
                </div>
            </div>
        </header>
    )
}

export default Header
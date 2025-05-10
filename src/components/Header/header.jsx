import React, { useState } from "react";
import logoCF from '../../photo/PHIN-LOGO-WHITE.png';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();  // Get current location

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const getLinkClass = (path) => {
        return location.pathname === path ? styles.active : '';
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.anh}>
                    <a href="/introduction">  <img className={styles.AnhLogo} src={logoCF} alt="logo" /></a>
                </div>

                <div className={styles.menuIcon} onClick={toggleMenu}>
                    <a href="#"><i class="fa-solid fa-bars"></i></a>
                </div>


                <div
                    className={`${styles.overlay} ${menuOpen ? styles.showOverlay : ''}`}
                    onClick={toggleMenu}
                ></div>

                <ul className={`${styles.menuList} ${menuOpen ? styles.showMenu : ''}`}>
                    <a href="/introduction" className={getLinkClass('/introduction')}>Giới Thiệu</a>
                    <a href="/menu" className={getLinkClass('/menu')}>Menu</a>
                    <a href="/News" className={getLinkClass('/News')}>Tin Tức</a>
                    <a href="/Stores" className={getLinkClass('/Stores')}>Cửa Hàng</a>
                    <a href="/Contact" className={getLinkClass('/Contact')}>Liên Hệ</a>
                    <a id={styles.NgonNgu} href="">EN</a>
                </ul>


            </header>
        </>

    );
}

export default Header;
// test
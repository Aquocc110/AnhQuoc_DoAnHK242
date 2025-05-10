
import React from "react";
import { useState } from 'react';
import logoCF from '../../photo/PHIN-LOGO-WHITE.png';
import styles from './Footter.module.css';
import { Link } from 'react-router-dom';

function Footter() {
    return (
        <div className={styles.footter}>
            <nav className={styles.anh}>
                <img className={styles.AnhLogo} src={logoCF} alt="logo" />
            </nav>
            <nav className={styles.td1}>
                <h2>FEEL FREE TO CONTACT US</h2>
            </nav>
            <nav className={styles.LienHe}>
                <div>
                    <p className={styles.L1}>H. </p>
                    <p>076 954 9179</p>
                </div>
                <div>
                    <p className={styles.L1}>N. </p>
                    <p>Lê Phan Anh Quốc</p>
                </div>
                <div>
                    <p className={styles.L1}>M. </p>
                    <p>conlauban@gmail.com</p>
                </div>

            </nav>
            <nav className={styles.nut1}>
                <h3>THÔNG TIN ƯU ĐÃI MỚI NHẤT</h3>
                <li><a href="/News">TIN TỨC</a></li>
                <div className={styles.ThanhKe}></div>

                <li><a href="/Stores">CỬA HÀNG</a></li>

            </nav>
        </div>


    );
}
export default Footter
import React from "react";
import styles from './Menu.module.css'
import DoUong1 from '../../photo/DoUong/DoUong1.png'
import DoUong2 from '../../photo/DoUong/DoUong2.png'
import DoUong3 from '../../photo/DoUong/DoUong3.png'
import DoUong4 from '../../photo/DoUong/DoUong4.png'
import DoUong5 from '../../photo/DoUong/DoUong5.png'
import DoUong6 from '../../photo/DoUong/DoUong6.png'
import DoUong7 from '../../photo/DoUong/DoUong7.png'
import DoUong8 from '../../photo/DoUong/DoUong8.png'
import DoUong9 from '../../photo/DoUong/Douong9.png'
import DoUong10 from '../../photo/DoUong/DoUong10.png'
import DoUong11 from '../../photo/DoUong/DoUong11.png'
import DoUong12 from '../../photo/DoUong/DoUong12.png'
import banner from '../../photo/maytinh-11-800x450-22.jpg'
import { useNavigate } from 'react-router-dom';
import { useScrollFromBottom } from "../../Active"; // đường dẫn tương ứng
function MenuPage() {
    useScrollFromBottom(styles);
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/menu/${id}`);
        setTimeout(() => {
            window.location.href = `/menu/${id}`;
        }, 100);
    };
    return (

        <div className={styles.MenuPage}>
            <nav className={styles.menuName}>
                <h1 className={styles.title}>Hương vị của PHINDELI</h1>
            </nav>
            <nav className={styles.MenuDoUong}>
                <div className={styles.Nuoc1} onClick={() => handleClick(1)}>
                    <img src={DoUong1} alt="Đồ uống" />
                    <p>JINGLE FREEZE</p>
                </div>

                <div className={styles.Nuoc2} onClick={() => handleClick(2)}>
                    <img src={DoUong2} alt="Đồ uống" />
                    <p>PHIN CÀ PHÊ KEM SỮA CROISSANT</p>
                </div>

                <div className={styles.Nuoc3} onClick={() => handleClick(3)}>
                    <img src={DoUong3} alt="Đồ uống" />
                    <p>ỔI HỒNG NGỌC THẠCH</p>
                </div>

                <div className={styles.Nuoc4} onClick={() => handleClick(4)}>
                    <img src={DoUong4} alt="Đồ uống" />
                    <p>JINGLE FREEZE</p>
                </div>

                <div className={styles.Nuoc5} onClick={() => handleClick(5)}>
                    <img src={DoUong5} alt="Đồ uống" />
                    <p>PHIN CÀ PHÊ KEM SỮA CROISSANT</p>
                </div>

                <div className={styles.Nuoc6} onClick={() => handleClick(6)}>
                    <img src={DoUong6} alt="Đồ uống" />
                    <p>ỔI HỒNG NGỌC THẠCH</p>
                </div>

                <div className={styles.Nuoc7} onClick={() => handleClick(7)}>
                    <img src={DoUong7} alt="Đồ uống" />
                    <p>JINGLE FREEZE</p>
                </div>

                <div className={styles.Nuoc8} onClick={() => handleClick(8)}>
                    <img src={DoUong8} alt="Đồ uống" />
                    <p>PHIN CÀ PHÊ KEM SỮA CROISSANT</p>
                </div>

                <div className={styles.Nuoc9} onClick={() => handleClick(9)}>
                    <img src={DoUong9} alt="Đồ uống" />
                    <p>ỔI HỒNG NGỌC THẠCH</p>
                </div>

                <div className={styles.Nuoc10} onClick={() => handleClick(10)}>
                    <img src={DoUong10} alt="Đồ uống" />
                    <p>JINGLE FREEZE</p>
                </div>

                <div className={styles.Nuoc11} onClick={() => handleClick(11)}>
                    <img src={DoUong11} alt="Đồ uống" />
                    <p>PHIN CÀ PHÊ KEM SỮA CROISSANT</p>
                </div>

                <div className={styles.Nuoc12} onClick={() => handleClick(12)}>
                    <img src={DoUong12} alt="Đồ uống" />
                    <p>Lê Phan Anh Quốc</p>
                </div>

            </nav>
            <h1>CHÚC QUÝ KHÁCH CÓ TRẢI NGHIỆM THẬT TUYỆT VỜI</h1>
            <img className={styles.banner} src={banner} alt="" />

        </div>

    );
}
export default MenuPage
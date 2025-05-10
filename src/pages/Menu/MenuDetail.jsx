import React from "react";
import { useParams } from "react-router-dom";
import { drinks } from "./Medudetail";
import styles from './style.module.css'

function DetailMenu() {
    const { id } = useParams();
    const drink = drinks.find((d) => d.id === parseInt(id));

    console.log(drink);
    if (!drink) return <div>Không tìm thấy món!</div>;

    return (
        <div className={styles.detailMenu}>
            <nav className={styles.title}>
                <h1>Taste of Phin Deli</h1>
            </nav>
            <nav className={styles.Link}>
                <p><a href="/menu"><i class="fa-solid fa-chevron-left"></i> Đồ uống</a></p>
                <p>|</p>
                <p className={styles.poin}>{drink.name}</p>

            </nav>
            <div className={styles.ThanhKe}></div>
            <nav className={styles.chitiet}>
                <div>
                    <img className={styles.imgAnh} src={drink.image} alt={drink.name} />
                </div>
                <div>
                    <p className={styles.ten}>{drink.name}</p>
                    <p className={styles.Gia}>Giá: {drink.Gia}</p>
                    <p className={styles.Mota}>Mô Tả: <br />{drink.description}</p>
                </div>
            </nav>

        </div>
    );
}

export default DetailMenu;

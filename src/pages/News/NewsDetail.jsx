import React from "react";
import { useParams } from "react-router-dom";
import { Infor } from "./Newsdetail1";
import styles from '../News/NewsDetail.module.css';

function DetailInfor() {
    const { id } = useParams();
    const Infors = Infor.find((d) => d.id === parseInt(id));

    console.log(Infors);
    if (!Infors) return <div>Không tìm thấy tin!</div>;

    return (
        <div className={styles.newsDetail}>
            <nav className={styles.title}>
                <h1>Tin tức</h1>
            </nav>
            <nav className={styles.Link}>
                <p><a href="/news"><i class="fa-solid fa-chevron-left"></i> Tin tức</a></p>
                <p>|</p>
                <p className={styles.poin}>{Infors.name}</p>
            </nav>
            <div className={styles.ThanhKe}></div>
            <nav className={styles.chitiet}>
                <p className={styles.ten}>{Infors.name}</p>
                <p className={styles.date}>Thời gian: {Infors.date}</p>
                <div>
                    <img className={styles.imgAnh} src={Infors.image} alt={Infors.name} />
                </div>
                <p className={styles.Mota}>Chi tiết:<br />{Infors.description}</p>
                <div className={styles.ThanhKe}></div>
                <p className={styles.hashtags}>Hashtags: {Infors.hashtags.join(' ')}</p>
            </nav>
        </div>
    );
}

export default DetailInfor;

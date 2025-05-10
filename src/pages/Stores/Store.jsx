import React from "react";
import style from './Store.module.css'
function StoresPage() {
    return (
        <div className={style.StoresPage}>
            <div className={style.Title}>
                <h1>Cửa Hàng</h1>
            </div>
            <nav className={style.Chung}>
                <ul className={style.DiaChi}>
                    <li>
                        <p className={style.col1}>Cửa hàng</p>
                        <p className={style.col2}>Địa chỉ</p>
                        <p className={style.col3}>Liên Hệ</p>

                    </li>

                </ul>
                <div className={`${style.ThanhKe} ${style.KeTieuDe}`}></div>

                <ul className={style.ChiTiet}>
                    <li>
                        <p className={style.col1}>Phindeli Café – Soho</p>
                        <p className={style.col2}>100 Cô Giang, Phường Cô Giang, Quận 1, TP.HCM</p>
                        <p className={style.col3}>1900 292 977</p>
                    </li>
                    <div className={style.ThanhKe}></div>
                    <li>
                        <p className={style.col1}>PhinDeli Café – Aeon Mall</p>
                        <p className={style.col2}>30 Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú, TP.HCM</p>
                        <p className={style.col3}>1900 292 977</p>
                    </li>
                    <div className={style.ThanhKe}></div>
                    <li>
                        <p className={style.col1}>PhinDeli Café – Orchard Parkview</p>
                        <p className={style.col2}>130-132 Hồng Hà, Phường 9, Quận Phú Nhuận, TP.HCM</p>
                        <p className={style.col3}>1900 292 977</p>
                    </li>
                    <div className={style.ThanhKe}></div>
                </ul>
            </nav>

        </div>


    );
}
export default StoresPage
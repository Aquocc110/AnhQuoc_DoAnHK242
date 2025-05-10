import React from "react";
import { useState } from 'react';
import styles from './contact.module.css'
import { useScrollAnimation2 } from '../../Active';
function ContactPage() {
    const [activeIndex, setActiveIndex] = useState(null);
    useScrollAnimation2(styles);
    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className={styles.ContactPage}>
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
            <nav className={styles.NoiDung}>
                <h1>Kính chào quý khách hàng</h1>
                <p>Quý khách có câu hỏi hay đóng góp ý kiến vui lòng điền vào mẫu bên cạnh.
                    Chúng tôi sẽ liên hệ Quý khách sớm nhất có thể.
                </p>
                <p>
                    PhinDeli chân thành cảm ơn.
                </p>
            </nav>
            <nav className={styles.DangKy}>
                <form className={styles.Form}>

                    <label htmlFor="fullname">Full Name</label>
                    <textarea type="text" id="fullname" placeholder="Your Name" />

                    <label htmlFor="phone">Your Phone</label>
                    <textarea type="text" id="phone" placeholder="Your Phone" />

                    <label htmlFor="email">Email</label>
                    <textarea type="email" id="email" placeholder="Email" />

                    <label htmlFor="address">Your Address</label>
                    <textarea type="text" id="address" placeholder="Your Address" />

                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="4" placeholder="Your Message"></textarea>

                    <a type="submit" className={styles.SendBtn}>SEND</a>
                </form>
            </nav>
            <nav className={styles.FQ}>
                <h1>F&Q</h1>

                <div className={`${styles.n1} ${styles.row1}`} onClick={() => toggleIndex(0)}>
                    <p className={styles.question}>What is your return policy?</p>
                    <div className={`${styles.answer} ${activeIndex === 0 ? styles.show : ''}`}>
                        Quý khách vui lòng gọi tới hotline 1900 292 977 để được hỗ trợ sớm nhất
                    </div>
                    <div className={styles.ThanhKe}></div>
                </div>


                <div className={`${styles.n1} ${styles.row1}`} onClick={() => toggleIndex(1)}>
                    <p className={styles.question}>How do I track my order?</p>
                    <div className={`${styles.answer} ${activeIndex === 1 ? styles.show : ''}`}>
                        Quý khách vui lòng truy cập vào phần tin tức: https://phindelicafe.com.vn/tin-tuc/ để cập nhật các tin tức mới nhất về PhinDeli.                    </div>
                    <div className={styles.ThanhKe}></div>
                </div>
                <div className={`${styles.n1} ${styles.row1}`} onClick={() => toggleIndex(2)}>
                    <p className={styles.question}>Who create this website?</p>
                    <div className={`${styles.answer} ${activeIndex === 2 ? styles.show : ''}`}>
                        Sinh Viên: Lê Phan Anh Quốc <br /> MSSV: 2474801030050 <br /> Môn: Thiết Kế Web
                    </div>
                    <div className={styles.ThanhKe}></div>
                </div>


            </nav>

        </div>
    );
}
export default ContactPage
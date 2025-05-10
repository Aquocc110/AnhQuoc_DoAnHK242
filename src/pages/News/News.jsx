import React from "react";
import styles from './News.module.css'
import TrangTri from '../../photo/TrangTri.png'
import Anh1 from '../../photo/TinTuc/TT1.jpg'
import Anh2 from '../../photo/TinTuc/TT2.jpg'
import Anh3 from '../../photo/TinTuc/TT3.jpg'
import Anh4 from '../../photo/TinTuc/TT4.jpg'
import Anh5 from '../../photo/TinTuc/TT5.jpg'
import Anh6 from '../../photo/TinTuc/TT6.jpg'
import Anh7 from '../../photo/TinTuc/TT7.png'
import Anh8 from '../../photo/TinTuc/TT8.png'
import Anh9 from '../../photo/TinTuc/TT9.jpg'
import Anh10 from '../../photo/TinTuc/TT10.jpg'
import { useScrollAnimation1 } from '../../Active';
import { useScrollAnimation2 } from '../../Active';
import { useNavigate } from 'react-router-dom';


function NewsPage() {
    useScrollAnimation1(styles);
    useScrollAnimation2(styles);
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/news/${id}`);
        setTimeout(() => {
            window.location.href = `/news/${id}`;;
        }, 100);
    };
    return (
        <div className={styles.NewsPage}>
            <nav className={styles.NewsTitle}>
                <h1 className={styles.title}>Tin Mới Nhất</h1>
            </nav>
            <nav className={styles.TinTuc}>
                <div className={`${styles.TT1} ${styles.row}`}>
                    <img src={Anh1} alt="" />
                </div>
                <div className={`${styles.TT2} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>Perfect Match, Blooming March 🌸✨</h1>
                    <p>Có bánh có trà, PhinDeli mời “người đẹp” ghé chill 💖
                        Hãy tự thưởng cho bản thân một ngày trọn vẹn với trà thơm,
                        bánh ngon, vibe xịn – chuẩn công thức cho một tháng Ba bừng nở 💃
                        Nhân dịp 8/3, cùng PhinDeli gửi ngàn lời yêu đến phái đẹp, chúc các nàng luôn…
                    </p>
                    <a href="" onClick={() => handleClick(1)} >XEM THÊM+</a>
                </div>
                <div className={`${styles.TT3} ${styles.row}`}>
                    <img src={Anh2} alt="" />
                </div>
                <div className={`${styles.TT4} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>COMBO BỮA SÁNG HỨNG KHỞI CHỈ TỪ 45K</h1>
                    <p>Sáng bận rộn nhưng vẫn phải ngon & chất? Ghé ngay PhinDeli và
                        chọn ngay Combo Bữa Sáng chỉ từ 45K. Bánh mì que giòn tan +
                        Cà phê đậm đà – 45K Bánh giò nóng hổi +
                        Cà phê thơm nức – 55K Gọn nhẹ,
                        tiện lợi mà vẫn chill hết nấc! Sẵn sàng…
                    </p>
                    <a href="" onClick={() => handleClick(2)}>XEM THÊM+</a>
                </div>
                <div className={`${styles.TT5} ${styles.row}`}>
                    <img src={Anh3} alt="" />
                </div>
                <div className={`${styles.TT6} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>SẺ CHIA VỊ TẾT – BÁNH NƯỚC PHIN MỜI</h1>
                    <p>Tết này vừa nhâm nhi ly nước đậm vibe xuân, vừa cắn miếng bánh thơm nức thì thật là chill đúng không nào? PhinDeli có “lì xì” cho bạn nè: Nhận ngay ưu đãi giảm 50% cho Bánh mì que hoặc Bánh ngọt bất kỳ khi mua 01 ly Kim Quất Thanh Xuân. Lưu ý:…</p>
                    <a href="" onClick={() => handleClick(3)}>XEM THÊM+</a>
                </div>
                <div className={`${styles.TT7} ${styles.row}`}>
                    <img src={Anh4} alt="" />
                </div>
                <div className={`${styles.TT8} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>BÁNH GIÒ NGŨ VỊ PHINDELI – NHÂN ĐẦY ẮP, ĐẬM VỊ NHÀ</h1>
                    <p>Bữa sáng “nạp max” năng lượng, sẵn sàng chinh phục mọi thử thách với Bánh giò ngũ vị vừa có mặt tại nhà PhinDeli. Vỏ bánh mềm mịn nóng hổi, nhân đầy ú ụ, đủ ngũ vị đậm đà, có thêm topping chả lụa, giăm bông cùng rau dưa ngon lành, tất cả là đủ…</p>
                    <a href="" onClick={() => handleClick(4)}>XEM THÊM+</a>
                </div>
                <div className={`${styles.TT9} ${styles.row}`}>
                    <img src={Anh5} alt="" />
                </div>
                <div className={`${styles.TT10} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>KIM QUẤT THANH XUÂN – LÀN GIÓ XUÂN TƯƠI MÁT CHO MÙA TẾT</h1>
                    <p>Kết hợp tinh tế giữa quả kim quất tươi ngon, nổi bật với hương thơm thanh mát, cùng xí muội chua ngọt hài hòa và thạch chanh lạ miệng, “Kim Quất Thanh Xuân” không chỉ làm say lòng chúng mình mà còn mang đến cảm giác tươi mới, sảng khoái cho mùa Tết năm nay….</p>
                    <a href="" onClick={() => handleClick(5)}>XEM THÊM+</a>
                </div>
                <div className={`${styles.TT11} ${styles.row}`}>
                    <img src={Anh6} alt="" />
                </div>
                <div className={`${styles.TT12} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>SANTA’S LUCKY GIFT – TẶNG TÚI MÙ CHO HOÁ ĐƠN TỪ 55K</h1>
                    <p>Mùa Giáng Sinh năm nay, ông già Noel FiNN mang đến những “túi quà” bí ẩn. Khám phá ngay quà tặng siêu dễ thương đang “ẩn náu” trong những chiếc túi mù tại PhinDeli. Mỗi quà tặng bé bé xinh xinh đều là tình cảm chân thành của Phin gửi gắm lời chúc X’Mas an…</p>
                    <a href="" onClick={() => handleClick(6)}>XEM THÊM+</a>
                </div>
                <div className={`${styles.TT13} ${styles.row}`}>
                    <img src={Anh7} alt="" />
                </div>
                <div className={`${styles.TT14} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>X’MAS COMBO – CHILL GIÁNG SINH, NGON ĐÚNG ĐIỆU</h1>
                    <p>Tận hưởng hương vị mùa lễ hội ngọt ngào cùng X’Mas Combo của PHINDELI. Mùa lễ hội này, Phindeli trình làng X’MAS COMBO siêu hot dành cho hội mê ngọt và thích chill. Combo đỉnh của chóp với bánh lạnh ngon mê và thức uống thanh mát với giá ưu đãi chỉ 85k, sẵn sàng…</p>
                    <a href="" onClick={() => handleClick(7)}>XEM THÊM+</a>
                </div>
                <div className={`${styles.TT15} ${styles.row}`}>
                    <img src={Anh8} alt="" />
                </div>
                <div className={`${styles.TT16} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>IN DINING CHÍNH THỨC RA MẮT CHƯƠNG TRÌNH THÀNH VIÊN IN REWARDS</h1>
                    <p>⭐️ 𝗠𝗢𝗥𝗘 𝗧𝗛𝗔𝗡 𝗣𝗥𝗜𝗩𝗜𝗟𝗘𝗚𝗘, 𝗜𝗧’𝗦 𝗕𝗘𝗬𝗢𝗡𝗗 𝗘𝗫𝗣𝗘𝗖𝗧𝗔𝗧𝗜𝗢𝗡 ⭐️ IN DINING CHÍNH THỨC RA MẮT CHƯƠNG TRÌNH THÀNH VIÊN IN REWARDS 🔗 Đăng ký ngay: https://zalo.me/s/3704320105632704265/ Bằng nghệ thuật kể chuyện qua hương vị, 13 thương hiệu thuộc IN Dining luôn hướng đến trải nghiệm vượt ngoài mong đợi của thực khách về cả chất lượng…</p>
                    <a href="" onClick={() => handleClick(8)}>XEM THÊM+</a>
                </div>
                <div className={`${styles.TT17} ${styles.row}`}>
                    <img src={Anh9} alt="" />
                </div>
                <div className={`${styles.TT18} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>VŨ TRỤ NÔNG SẢN VIỆT XOÀI & CHUỐI CHÍNH THỨC LỘ DIỆN</h1>
                    <p>Tự hào mang nông sản địa phương vào thức uống, qua bàn tay thành thạo của Barista, mùa này PhinDeli muốn kể bạn nghe câu chuyện về 2 thức quả vừa quen thuộc, vừa gần gũi. Chắt chiu chọn lọc nơi vườn trồng, kết hợp cùng cà phê Phin từ cao nguyên trứ danh, PhinDeli…</p>
                    <a href="" onClick={() => handleClick(9)}>XEM THÊM+</a>
                </div>
                <div className={`${styles.TT19} ${styles.row}`}>
                    <img src={Anh10} alt="" />
                </div>
                <div className={`${styles.TT20} ${styles.row}`}>
                    <img className={styles.TrangTri} src={TrangTri} alt="" />
                    <h1>COMBO “BỮA SÁNG HỨNG KHỞI” CHỈ 55K</h1>
                    <p>Còn gì tuyệt vời hơn khi bắt đầu ngày mới bằng 1 ổ bánh mì Việt Nam vỏ giòn rụm, nhân đầy ắp hoặc chiếc bánh Croissant nóng hổi vừa nướng ra lò kèm ly cà phê đậm vị? Từ ngày 15.07 đến hết 30.09.2024, PhinDeli mang đến cho bạn ưu đãi hấp dẫn: Combo…</p>
                    <a href="" onClick={() => handleClick(10)}>XEM THÊM+</a>
                </div>


            </nav>
            <nav className={styles.SmallNews}>
                <nav className={`${styles.New1} ${styles.row1}`}>
                    <img src={Anh2} alt="" />
                    <nav className={styles.NoiDung}>
                        <p>  Tin tức.| 10.02.2025</p>
                        <b onClick={() => handleClick(1)}>COMBO BỮA SÁNG HỨNG KHỞI CHỈ TỪ 45K</b>
                    </nav>

                    <div className={styles.ThanhKe}></div>
                </nav>
                <nav className={`${styles.New2} ${styles.row1}`}>
                    <img src={Anh1} alt="" />
                    <nav className={styles.NoiDung}>
                        <p> Tin tức.| 23.01.2025</p>
                        <b onClick={() => handleClick(2)}>SẺ CHIA VỊ TẾT – BÁNH NƯỚC PHIN MỜI</b>
                    </nav>
                    <div className={styles.ThanhKe}></div>
                </nav>


                <nav className={`${styles.New3} ${styles.row1}`}>
                    <img src={Anh3} alt="" />
                    <nav className={styles.NoiDung}>
                        <p>Tin tức.| 05.01.2025</p>
                        <b onClick={() => handleClick(3)}>CHILL NGỌT NGÀO CÙNG TRÀ DÂU & TRÀ ĐÀO</b>
                    </nav>
                    <div className={styles.ThanhKe}></div>
                </nav>

                <nav className={`${styles.New4} ${styles.row1}`}>
                    <img src={Anh4} alt="" />
                    <nav className={styles.NoiDung}>
                        <p>Tin tức.| 22.12.2024</p>
                        <b onClick={() => handleClick(4)}>MERRY XMAS – CÀ PHÊ ẤM CHO MÙA LỄ HỘI</b>
                    </nav>
                    <div className={styles.ThanhKe}></div>
                </nav>

                <nav className={`${styles.New5} ${styles.row1}`}>
                    <img src={Anh5} alt="" />
                    <nav className={styles.NoiDung}>
                        <p>Tin tức.| 08.11.2024</p>
                        <b onClick={() => handleClick(5)}>MÙA THU THƠM NGÁT VỚI LATTE KEM SỮA</b>
                    </nav>
                    <div className={styles.ThanhKe}></div>
                </nav>
                <nav className={`${styles.New6} ${styles.row1}`}>
                    <img src={Anh6} alt="" />
                    <nav className={styles.NoiDung}>
                        <p>Tin tức.| 14.10.2024</p>
                        <b onClick={() => handleClick(6)}>PHIN ĐẬM – HƯƠNG VỊ VIỆT ĐƯỢC YÊU THÍCH</b>
                    </nav>
                    <div className={styles.ThanhKe}></div>
                </nav>
                <nav className={`${styles.New7} ${styles.row1}`}>
                    <img src={Anh7} alt="" />
                    <nav className={styles.NoiDung}>
                        <p>Tin tức.| 26.03.2024</p>
                        <b onClick={() => handleClick(7)}>KHÁM PHÁ KHÔNG GIAN MỚI TINH CỦA PHINDELI CAFÉ – ORCHARD PARKVIEW</b>
                    </nav>
                    <div className={styles.ThanhKe}></div>
                </nav>


            </nav>
        </div>


    );
}
export default NewsPage
import React from "react";
import { useEffect } from "react";
import style from './introduction.module.css'
import anhquan1 from '../../photo/anhquan1.jpg'
import anhquan2 from '../../photo/anhquan2.png'
import anhquan3 from '../../photo/anhquan3.png'
import { useScrollAnimation } from '../../Active';
function IntroductionPage() {
    useScrollAnimation(style);
    return (

        <div className={style.Introduction}>

            <div className={style.layout}>
                <div className={`${style.row} ${style.hang1}`}>
                    <nav className={style.Noidung}>
                        <h1>People of Phin - People of Fun</h1>
                        <div className={style.thanhke}></div>
                        <p>Khởi đầu với sứ mệnh mang cà phê phin Việt vào cuộc sống hiện đại,
                            PhinDeli là thương hiệu cà phê dành cho giới trẻ với nguồn cảm hứng sáng tạo khác biệt.
                            Chiếc phin cà phê biến hoá trở thành biểu tượng của sự kết nối, định hình phong cách sống năng động và liên tục phát triển của thế hệ mới.
                            Không chỉ mang đến những ly cà phê thơm ngon,
                            PhinDeli còn mở ra không gian độc đáo để gặp gỡ,
                            chia sẻ và lan tỏa cảm hứng cà phê Việt đến khắp nơi trên thế giới.
                        </p>
                        <a href="/Stores">CỬA HÀNG</a>
                    </nav>
                </div>
                <div className={`${style.row} ${style.hang2}`}>
                    <nav className={style.anhQuan}>
                        <img src={anhquan1} alt="Phong cảnh" />
                    </nav>
                </div>
                <div className={`${style.row} ${style.hang3}`}>
                    <nav className={style.anhQuan}>
                        <img src={anhquan2} alt="Phong cảnh" />
                    </nav>
                </div>
                <div className={`${style.row} ${style.hang4}`}>
                    <nav className={style.Noidung}>
                        <h3>TẦM NHÌN VÀ SỨ MỆNH</h3>
                        <p>Trở thành thương hiệu dẫn đầu xu hướng thưởng thức cà phê đậm chất Việt Nam,
                            tạo nền tảng trở thành một trong những nhà cung cấp cà phê thành phẩm Việt Nam lớn nhất thế giới.
                        </p>

                    </nav>
                </div>
                <div className={`${style.row} ${style.hang5}`}>
                    <nav className={style.Noidung}>
                        <h3>TỪ HẠT CÀ PHÊ ĐẾN CỐC CÀ PHÊ</h3>
                        <p>Chiếc phin cà phê tuy nhỏ bé nhưng khát khao của chúng tôi là to lớn.
                            PhinDeli Café với những con người mong muốn phát triển bền vững hương vị cà phê Việt,
                            lan toả văn hoá uống cà phê đến với thế giới cùng sự kết nối chân thật từ sâu trong tâm hồn.
                        </p>

                    </nav>
                </div>
                <div className={`${style.row} ${style.hang6}`}>
                    <nav className={style.anhQuan}>
                        <img src={anhquan3} alt="Phong cảnh" />
                    </nav>
                </div>

            </div>
        </div>

    );
}
export default IntroductionPage
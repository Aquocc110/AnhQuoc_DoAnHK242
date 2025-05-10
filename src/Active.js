// chạy animation (có css riêng)
import { useEffect } from "react";

// bắt khung hình để chạy animation
export function useScrollAnimation(style) {
    useEffect(() => {
        const rows = document.querySelectorAll(`.${style.row}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const content = entry.target;
                    if (entry.isIntersecting) {
                        content.classList.add(style.show);
                        observer.unobserve(content);
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        rows.forEach((row, index) => {
            const isEven = index % 2 === 0;
            const content = row.querySelector("nav ");
            if (content) {
                content.classList.add(isEven ? style.hiddenLeft : style.hiddenRight);
                observer.observe(content);
            }
        });

        return () => observer.disconnect();
    }, [style]);
}

// ------------------------------------------------------------------------------------
// lướt để items chạy từ dưới lên ( có css để animation)
export function useScrollFromBottom(style) {
    useEffect(() => {
        const items = document.querySelectorAll(`.${style.MenuDoUong} > div`);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, idx) => {
                    if (!entry.isIntersecting) return;
                    // delay lần lượt theo idx
                    setTimeout(() => {
                        entry.target.classList.add(style.showUp);
                    }, idx * 150);
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.1 }
        );


        items.forEach((item) => {
            item.classList.add(style.hiddenUp);
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, [style]);
}
// -----------------------------------------------------
// bắt thẻ row để chạy animation, chạy từ trái qua phải, phải qua trái của NEWS
export function useScrollAnimation1(styles) {
    useEffect(() => {
        const rows = document.querySelectorAll(`.${styles.row}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const content = entry.target;
                    if (entry.isIntersecting) {
                        content.classList.add(styles.show);
                        observer.unobserve(content);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        rows.forEach((row, index) => {
            const isEven = index % 2 === 0; // ← Fixed logic
            const content = row.querySelector("div") || row; // fallback in case no inner div
            if (content) {
                content.classList.add(isEven ? styles.hiddenLeft : styles.hiddenRight);
                observer.observe(content);
            }
        });

        return () => observer.disconnect();
    }, [styles]);
}

// Cuộn lênn
export function useScrollAnimation2(styles) {
    useEffect(() => {

        const elements = document.querySelectorAll(`.${styles.row1}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        entry.target.classList.add(styles.slideUp);
                    }

                });
            },
            { threshold: 0.2 }
        );


        elements.forEach((el) => {
            observer.observe(el);
        });


        return () => {
            observer.disconnect();
        };
    }, [styles]);
};
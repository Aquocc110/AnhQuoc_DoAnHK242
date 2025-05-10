// import { useRef, useState, useEffect } from "react";
// import React from 'react';

// const AnimatedInfoBox = ({ direction, children }) => {
//     const ref = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             entries => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         setIsVisible(true);
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.2 }
//         );

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => {
//             if (ref.current) observer.unobserve(ref.current);
//         };
//     }, []);

//     return (
//         <div ref={ref}
//             className={`
//         transition-all duration-700 ease-out
//         opacity-0 transform
//         ${isVisible ? "opacity-100 translate-x-0" : direction === "left" ? "-translate-x-20" : "translate-x-20"}
//       `}

//         >
//             {children}
//         </div>
//     );
// };

// export default AnimatedInfoBox;

import { useRef, useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

const ScrollReveal = ({
  children,
  offset = 0, // jarak dari top viewport untuk trigger
  duration = 0.6, // durasi animasi
  delay = 0, // delay per child
  once = true, // animasi hanya sekali
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const distanceFromTop = ref.current.getBoundingClientRect().top;

      if (distanceFromTop <= offset && (!show || !once)) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // jalankan sekali saat load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show, offset, once]);

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: -30 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </Motion.div>
  );
};

export default ScrollReveal;

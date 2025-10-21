// SlideDown.jsx
import { motion as Motion } from "framer-motion";

const SlideDown = ({ children, delay = 0, duration = 0.5, distance = 0 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </Motion.div>
  );
};

export default SlideDown;

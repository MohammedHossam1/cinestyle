import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "fade" | "slide" | "scale";

const Reveal = ({
  children,
  delay = 0,
  duration = 0.8,
  style, 
  className,
  y = 50,
  animation = "slide",
}: {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
  duration?: number;
  y?: number;
  animation?: AnimationType;
}) => {
  const variants = {
    fade: { opacity: 0 },
    slide: { opacity: 0, y },
    scale: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      initial={variants[animation]}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className} 
      style={style} 
         >
      {children}
    </motion.div>
  );
};

export default Reveal;

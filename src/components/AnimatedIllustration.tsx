'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

interface AnimatedIllustrationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const AnimatedIllustration: React.FC<AnimatedIllustrationProps> = ({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          progressiveLoad: true
        }}
      />
    </motion.div>
  );
};

export default AnimatedIllustration;
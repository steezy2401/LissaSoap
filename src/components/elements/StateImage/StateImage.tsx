import { motion, useAnimation } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import React, { useEffect, useState } from 'react';

import motionVars from './StateImage.motion';

const FadeInImage = (props: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  useEffect(() => {
    if (loaded) {
      animationControls.start('visible');
    }
  }, [animationControls, loaded]);
  return (
    <motion.div
      initial='hidden'
      animate={animationControls}
      variants={motionVars}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <Image {...props} onLoad={() => setLoaded(true)} alt='image' />
    </motion.div>
  );
};

export default FadeInImage;

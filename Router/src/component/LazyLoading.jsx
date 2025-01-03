import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyLoading = ({image}) => {
  return (
    <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} 
      width={image.width} />
    <span>{image.caption}</span>
      
    </div>
  )
}

export default LazyLoading;

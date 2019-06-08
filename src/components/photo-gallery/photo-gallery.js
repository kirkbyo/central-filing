import React from 'react';

import styles from "../styles/photo-gallery.module.css"

const PhotoGallery = ({ children }) => (
   <div className={ styles.photo_gallery }>
      { children }
   </div>
)

export default PhotoGallery

import React from 'react';

import styles from "../styles/photo-gallery.module.css"

const PhotoGalleryColumn = ({ children }) => (
   <div className={ styles.photo_gallery_col }>
      { children }
   </div>
)

export default PhotoGalleryColumn

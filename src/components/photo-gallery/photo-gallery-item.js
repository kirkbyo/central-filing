import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "../styles/photo-gallery.module.css"

const PhotoGalleryItem = ({ imgName, width }) => (
   <div className={ styles.photo_gallery_item }>
     <StaticQuery
       query={graphql`
         query {
           allImageSharp {
             edges {
               node {
                 fluid(maxWidth: 500) {
                   ...GatsbyImageSharpFluid
                   originalName
                 }
               }
             }
           }
         }
       `}
       render={data => {
         const image = data.allImageSharp.edges.find(
           edge => edge.node.fluid.originalName === imgName
         )
         if (!image) { return null }
         return <Img fluid={image.node.fluid} />
       }}
     />
   </div>
)

export default PhotoGalleryItem

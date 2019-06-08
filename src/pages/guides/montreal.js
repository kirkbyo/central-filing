import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import VintageQuote from '../../components/vintage-quote'

import { PhotoGallery, PhotoGalleryCol, PhotoGalleryItem } from '../../components/photo-gallery'

const SecondPage = () => (
  <Layout className="article">
   <SEO title="Montréal" />
   <h1>Montréal</h1>
   <VintageQuote author="Centre d'histoire de Montréal">
   ‟Montreal is a living, dynamic entity, born from the encounter between a territory and a diversity of peoples. Like every city, it is in constant flux — never complete, always in the process of becoming. It bears the traces of those who came before: physical traces, reflected in the architecture and landscapes of its neighborhoods, and intangible traces, cast in lifestyles, languages and mentalities.”
   </VintageQuote>
   <h2>Photo's</h2>
   <PhotoGallery>
      <PhotoGalleryCol>
         <PhotoGalleryItem imgName="mtl_img_1.JPG" />
         <PhotoGalleryItem imgName="mtl_img_3.jpg" />
      </PhotoGalleryCol>
      <PhotoGalleryCol>
         <PhotoGalleryItem imgName="mtl_img_2.jpg" />
         <PhotoGalleryItem imgName="mtl_img_5.jpg" />
      </PhotoGalleryCol>
   </PhotoGallery>
   <h2>History</h2>
  </Layout>
)

export default SecondPage

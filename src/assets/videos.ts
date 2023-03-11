import image1 from '../../public/images/photography/1.jpg'

export enum VideoCategories {
  ALL = 'Svi albums',
  DOGADJAJI = 'Događaji',
  SPORT = 'Sport',
  ARHITEKTURA = 'Arhitektura',
  PRODUCT = 'Product'
}

const videoData = {
  [VideoCategories.ALL]: [
    {
      video: '/intro/TP FINAL.mp4'
    }
  ],
  [VideoCategories.SPORT]: [],
  [VideoCategories.DOGADJAJI]: [],
  [VideoCategories.ARHITEKTURA]: [],
  [VideoCategories.PRODUCT]: []
}

export default videoData

export enum VideoCategories {
  OSTALO = 'ostalo',
  DOGADJAJI = 'dogadjaji',
  SPORT = 'sport',
  SPOTOVI = 'spotovi',
  PRODUCT = 'product'
}

export type VideoData = {
  video: string
}

const videoData = {
  [VideoCategories.SPORT]: [],
  [VideoCategories.DOGADJAJI]: [],
  [VideoCategories.SPOTOVI]: [],
  [VideoCategories.PRODUCT]: [],
  [VideoCategories.OSTALO]: ['/intro/TP FINAL.mp4']
}

export default videoData

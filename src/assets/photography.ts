import image1 from '../../public/images/photography/1.jpg'
import image2 from '../../public/images/photography/2.jpg'
import image3 from '../../public/images/photography/3.jpg'
import image4 from '../../public/images/photography/4.jpg'
import image5 from '../../public/images/photography/5.jpg'
import image6 from '../../public/images/photography/6.jpg'
import image7 from '../../public/images/photography/2.jpg'
import image8 from '../../public/images/photography/4.jpg'
import image9 from '../../public/images/photography/6.jpg'
import image10 from '../../public/images/photography/5.jpg'

export enum PhotographyCategories {
  ALL = 'Svi albums',
  PORTRETI = 'Portreti',
  DOGADJAJI = 'Dogadjaji',
  ARHITEKTURA = 'Arhitektura'
}

const photoData = {
  [PhotographyCategories.ALL]: [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10
  ],
  [PhotographyCategories.PORTRETI]: [image1, image2, image3],
  [PhotographyCategories.DOGADJAJI]: [
    image1,
    image2,
    image3,
    image5,
    image4,
    image8
  ],
  [PhotographyCategories.ARHITEKTURA]: [image6, image9, image3, image2, image10]
}

export default photoData

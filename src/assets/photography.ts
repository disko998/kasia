import image1 from '../../public/images/photography/1.jpg'
import image2 from '../../public/images/photography/2.jpg'
import image3 from '../../public/images/photography/3.jpg'
import image4 from '../../public/images/photography/4.jpg'
import image5 from '../../public/images/photography/5.jpg'
import image6 from '../../public/images/photography/6.jpg'

enum PhotographyCategories {
  ALL = 'Svi albums',
  PORTRETI = 'Portreti',
  DOGADJAJI = 'Dogadjaji',
  ARHITEKTURA = 'Arhitektura'
}

const data = {
  [PhotographyCategories.PORTRETI]: [image1, image2, image3]
}

export default data

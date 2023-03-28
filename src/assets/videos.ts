export enum VideoCategories {
  OSTALO = 'ostalo',
  DOGADJAJI = 'dogadjaji',
  SPORT = 'sport',
  SPOTOVI = 'spotovi',
  PRODUCT = 'product'
}

export type VideoData = {
  link: string
  title: string
}

const videoData = {
  [VideoCategories.DOGADJAJI]: [
    {
      link: 'https://www.youtube.com/embed/1eGumytM_gE',
      title: 'Lukatelka vrtic #1'
    },
    {
      link: 'https://www.youtube.com/embed/eOaddMJo9RA',
      title: 'Lukatelka vrtic #2'
    },
    {
      link: 'https://www.youtube.com/embed/pt6oSG6_Kkk',
      title: 'Lukatelka vrtic #3'
    },
    {
      link: 'https://www.youtube.com/embed/CCkYlWPOFeU',
      title: 'Matej i Vanesa #1'
    }
  ],
  [VideoCategories.SPORT]: [
    {
      link: 'https://www.youtube.com/embed/7NLVzlnTk_A',
      title: 'stefanfitness intro'
    },
    { link: 'https://www.youtube.com/embed/gJNUZxBhJZA', title: 'push pull' },
    {
      link: 'https://www.youtube.com/embed/VjXB9Y6SaO8',
      title: 'intro session 2'
    }
  ],
  [VideoCategories.SPOTOVI]: [
    { link: 'https://www.youtube.com/embed/HFlXTKzUflw', title: 'rodjeni kao' },
    {
      link: 'https://www.youtube.com/embed/abz8Vi04-4E',
      title: 'kako da se odbranimo'
    },
    { link: 'https://www.youtube.com/embed/kJQ67JsAuac', title: 'Marsha' },
    {
      link: 'https://www.youtube.com/embed/S4tx_Eg6308',
      title: 'Tose Dal si sretnija cover'
    }
  ],
  [VideoCategories.PRODUCT]: [
    {
      link: 'https://www.youtube.com/embed/fvC2V0KunjU',
      title: 'amazon reklama'
    },
    { link: 'https://www.youtube.com/embed/VJQuMbiEQAk', title: 'ks cipele' },
    { link: 'https://www.youtube.com/embed/zQ-xtIo8TWc', title: 'bracely' },
    {
      link: 'https://www.youtube.com/embed/-Q1Q3mwu7BQ',
      title: 'absolute club'
    },
    { link: 'https://www.youtube.com/embed/2-LMFK_iJWM', title: 'edit 4k' },
    { link: 'https://www.youtube.com/embed/I4vq7WLOuI4', title: 'restoran' },
    { link: 'https://www.youtube.com/embed/zv_4KG1nHCw', title: 'igor tools' }
  ],
  [VideoCategories.OSTALO]: [
    {
      link: 'https://www.youtube.com/embed/CCkYlWPOFeU',
      title: 'dijalog podcast'
    },
    { link: 'https://www.youtube.com/embed/gEao9AlYVE8', title: 'tp final' },
    {
      link: 'https://www.youtube.com/embed/ff9knyYCHfU',
      title: 'DRUGA STRANA LOGO REVEAL'
    },
    {
      link: 'https://www.youtube.com/embed/jBukQD4IsNE',
      title: 'Chalet Petit Palais'
    },
    { link: 'https://www.youtube.com/embed/kWgtX3z9rQ0', title: 'krit video' },
    { link: 'https://www.youtube.com/embed/FTep7QDvFdk', title: 'kuca edit' }
  ]
}

export default videoData

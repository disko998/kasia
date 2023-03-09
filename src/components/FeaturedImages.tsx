import ScrollGallery from '@/components/ScrollGallery'

export default function FeaturedImages() {
  return (
    <section className="flex flex-col items-center py-12 text-center">
      <div className="container flex max-w-2xl flex-col items-center text-center">
        <h2 className="sm:text-h2 text-4xl">Fotografija nam je u rukama</h2>
        <p className="mt-7">
          Iza nas stoji široki spektar fotografskog sadržaja. Smatramo da smo
          jedni od najboljih na tržištu, kao što možete i sami da se uverite po
          slikama koje su ispod vas. Radeći sa nekim od najvećih firmi i imena u
          Srbiji i šire, postavili smo lestvicu koju retko ko može da nadmaši.
          Real Estate Photography, Porteri, Food Photography, Product
          Photography, Landscape Photography su samo neke od stvari koje vam
          nudimo. Nadamo se da ćete i vi, takođe, prepoznati naš kvalitet i sami
          se uveriti u ove reči.
        </p>
      </div>

      <div className="mt-10">
        <ScrollGallery />
      </div>
    </section>
  )
}

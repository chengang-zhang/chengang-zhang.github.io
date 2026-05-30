const photos = [
  {
    title: "The Brooklyn Bridge",
    location: "Brooklyn Bridge, New York",
    date: "January 2021",
    src: "https://live.staticflickr.com/65535/51247944666_a315400420_h.jpg",
  },
  {
    title: "The Manhattan Bridge",
    location: "DUMBO, Brooklyn, New York",
    date: "January 2021",
    src: "https://live.staticflickr.com/65535/51247223192_fe680bfd71_h.jpg",
  },
  {
    title: "Yellow Mountains",
    location: "Huangshan, Anhui Province, China",
    date: "December 2019",
    src: "https://live.staticflickr.com/65535/51248138803_05b5c7389b_h.jpg",
  },
  {
    title: "Huangshan City",
    location: "Huangshan City, Anhui Province, China",
    date: "December 2019",
    src: "https://live.staticflickr.com/65535/51248140733_d46cd180dc_h.jpg",
  },
  {
    title: "Yellow Mountains",
    location: "Huangshan, Anhui Province, China",
    date: "December 2019",
    src: "https://live.staticflickr.com/65535/51247944151_81d650e20d_h.jpg",
  },
  {
    title: "Yellow Mountains",
    location: "Huangshan, Anhui Province, China",
    date: "December 2019",
    src: "https://live.staticflickr.com/65535/51248995805_9213ab4bc5_h.jpg",
  },
  {
    title: "Coney Island",
    location: "Coney Island, Brooklyn, New York",
    date: "July 2018",
    src: "https://live.staticflickr.com/65535/51247224682_40f270115a_h.jpg",
  },
  {
    title: "Times Square",
    location: "New York, New York",
    date: "January 2018",
    src: "https://live.staticflickr.com/65535/51247222922_8d860b6497_h.jpg",
  },
  {
    title: "NYPL Central Library",
    location: "New York, New York",
    date: "January 2018",
    src: "https://live.staticflickr.com/65535/51247222857_9ff752d649_h.jpg",
  },
  {
    title: "Lujiazui",
    location: "Lujiazui, Shanghai, China",
    date: "November 2019",
    src: "https://live.staticflickr.com/65535/51247942846_9870995316_c.jpg",
  },
  {
    title: "Yu Garden",
    location: "Huangpu, Shanghai, China",
    date: "September 2019",
    src: "https://live.staticflickr.com/65535/51247222737_e4d925747d_h.jpg",
  },
  {
    title: "Renmin Rd.",
    location: "Huangpu, Shanghai, China",
    date: "September 2019",
    src: "https://live.staticflickr.com/65535/51247222357_7f1db02c10_h.jpg",
  },
  {
    title: "Yu Garden",
    location: "Huangpu, Shanghai, China",
    date: "September 2019",
    src: "https://live.staticflickr.com/65535/51248996420_bdae015067_h.jpg",
  },
  {
    title: "Welcome Sign",
    location: "Brooklyn, New York",
    date: "January 2021",
    src: "https://live.staticflickr.com/65535/51248997510_d37739828d_h.jpg",
  },
  {
    title: "Yellow Mountains",
    location: "Huangshan, Anhui Province, China",
    date: "December 2019",
    src: "https://live.staticflickr.com/65535/51247221387_6681e16c81_h.jpg",
  },
  {
    title: "Yellow Mountains",
    location: "Huangshan, Anhui Province, China",
    date: "December 2019",
    src: "https://live.staticflickr.com/65535/51248995710_092543ab69_h.jpg",
  },
  {
    title: "Coney Island",
    location: "Coney Island, Brooklyn, New York",
    date: "July 2018",
    src: "https://live.staticflickr.com/65535/51248141398_0ee136b076_h.jpg",
  },
  {
    title: "Times Square",
    location: "New York, New York",
    date: "January 2018",
    src: "https://live.staticflickr.com/65535/51247943676_98a52235c6_h.jpg",
  },
  {
    title: "Times Square",
    location: "New York, New York",
    date: "January 2018",
    src: "https://live.staticflickr.com/65535/51248140028_b1bbead7a8_h.jpg",
  },
  {
    title: "The Manhattan Bridge",
    location: "DUMBO, Brooklyn, New York",
    date: "January 2021",
    src: "https://live.staticflickr.com/65535/51248140928_78106a489f_c.jpg",
  },
  {
    title: "Lujiazui",
    location: "Lujiazui, Shanghai, China",
    date: "November 2019",
    src: "https://live.staticflickr.com/65535/51247222037_592918fa51_h.jpg",
  },
  {
    title: "Fuzhou",
    location: "Fuzhou, Fujian Province, China",
    date: "October 2019",
    src: "https://live.staticflickr.com/65535/51248997255_c753a33f7e_h.jpg",
  },
  {
    title: "The Bund",
    location: "Shanghai, China",
    date: "September 2019",
    src: "https://live.staticflickr.com/65535/51248699079_ee0a6e911a_h.jpg",
  },
  {
    title: "Yu Garden",
    location: "Huangpu, Shanghai, China",
    date: "September 2019",
    src: "https://live.staticflickr.com/65535/51247222637_0ab32cd952_h.jpg",
  },
];

function Photography() {
  return (
    <main className="photography">
      <div className="container">
        <header className="gallery-header">
          <h1>My Photography</h1>
        </header>

        <section className="photo-gallery" aria-label="Photography gallery">
          {photos.map((photo, index) => (
            <article className="photo-card" key={`${photo.src}-${index}`}>
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <div className="photo-caption">
                <h2>{photo.title}</h2>
                <p>
                  {photo.location} - {photo.date}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Photography;

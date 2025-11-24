import { ImageAutoSlider } from "./image-auto-slider";

const galleryImages = [
  "https://i.ibb.co/xKRq6KDc/IMG-20251124-WA0059.jpg",
  "https://i.ibb.co/DHQRCR9S/IMG-20251124-WA0061.jpg",
  "https://i.ibb.co/3mfdxYLw/IMG-20251118-WA0019.jpg",
  "https://i.ibb.co/Ld0ZHrsD/IMG-20251119-WA0008.jpg",
  "https://i.ibb.co/7xc3696k/IMG-20251119-WA0026.jpg",
  "https://i.ibb.co/Rk2grftt/IMG-20251119-WA0032.jpg",
  "https://i.ibb.co/WvT9BDbX/IMG-20251124-WA0057.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Gallery</p>
        <h2 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
          Workshop 1: Low-Code / No-Code Development
        </h2>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">
          Highlights from our immersive build sprint where members explored low-code tools,
          rapid prototyping, and collaborative problem solving.
        </p>

        <ImageAutoSlider images={galleryImages} className="mt-4 w-full" speedSeconds={26} />
      </div>
    </section>
  );
};

export default Gallery;

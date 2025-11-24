import * as React from "react";
import { cn } from "@/lib/utils";

type ImageAutoSliderProps = {
  images: string[];
  className?: string;
  speedSeconds?: number;
};

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
  images,
  className,
  speedSeconds = 22,
}) => {
  const duplicatedImages = React.useMemo(() => [...images, ...images], [images]);

  return (
    <div className={cn("relative overflow-hidden rounded-[36px] border border-white/10 bg-black/80 p-6 shadow-2xl", className)}>
      <style>{`
        @keyframes auto-slider-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .image-auto-slider__mask {
          mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .image-auto-slider__track {
          animation: auto-slider-scroll ${speedSeconds}s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 blur-3xl" aria-hidden />

      <div className="relative z-10 image-auto-slider__mask">
        <div className="image-auto-slider__track flex w-max gap-8">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group relative h-56 w-56 flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg transition hover:-translate-y-1 hover:bg-white/10 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
            >
              <img
                src={image}
                alt={`Gallery image ${(index % images.length) + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

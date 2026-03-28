"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
    alt: "Kid playing",
    size: "small",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
    alt: "Toy setup",
    size: "large",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1701984401385-4e46c91b24a8?q=80&w=870",
    alt: "Baby toy",
    size: "small",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?q=80&w=870",
    alt: "Reading",
    size: "small",
  },
  {
    id: 5,
    src: "https://plus.unsplash.com/premium_photo-1701984401462-f1c709ce722e?q=80&w=870",
    alt: "STEM kit",
    size: "small",
  },
  {
    id: 6,
    src: "https://plus.unsplash.com/premium_photo-1701984401340-62ac0a8ab4b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "STEM kit",
    size: "small",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "STEM kit",
    size: "large",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "STEM kit",
    size: "small",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-12 text-center space-y-2">
        <div className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
          Instagram Feed
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-neutral uppercase tracking-tighter">
          #KidsZoneMoments
        </h2>
      </div>

      {/* Mobile/Tablet Slider - FIXED: slidesPerView and module inclusion */}
      <div className="lg:hidden">
        <Swiper
          slidesPerView={1.2} // Show a bit of the next slide to hint at swiping
          spaceBetween={16}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          className="h-96"
        >
          {galleryImages.map((img) => (
            <SwiperSlide key={img.id}>
              {/* Added h-full to the container so Image fill works */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Bento Grid - FIXED: using fill for consistent sizing */}
      <div className="hidden lg:grid grid-cols-5 gap-4 h-[600px]">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className={`relative rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500
              ${img.size === "large" ? "col-span-2" : "col-span-1"}
            `}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="20vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4li87SAAAAABJRU5ErkJggg=="
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white p-3 rounded-full text-primary scale-50 group-hover:scale-100 transition-transform duration-300">
                <span className="font-bold text-xs">VIEW</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

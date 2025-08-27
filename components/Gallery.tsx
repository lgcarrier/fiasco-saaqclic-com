import React, { useRef, useEffect } from 'react';
import type { GalleryImage } from '../types';

interface ClicLogoProps {
  className?: string;
}

const ClicLogo: React.FC<ClicLogoProps> = ({ className }) => (
    <div className={`absolute bottom-2 right-2 flex items-center justify-center w-16 h-10 bg-[#f39c12] text-black font-bold rounded-md text-xl tracking-wider ${className}`}>
      <span>CLIC</span>
      <svg className="absolute -bottom-1 -right-1 w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </div>
);


interface GalleryProps {
  images: GalleryImage[];
  onImageClick: (imageUrl: string) => void;
  onLoadMore: () => void;
  hasMore: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ images, onImageClick, onLoadMore, hasMore }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore) {
          onLoadMore();
        }
      },
      { rootMargin: '200px' } // Buffer: load 200px before the element is visible
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, onLoadMore]);

  return (
    <section id="gallery" className="py-12">
      <div className="bg-[#343a40] text-white p-8 rounded-lg shadow-lg mb-12 flex flex-col items-center text-center">
        <div className="bg-white p-4 inline-block mb-6 rounded-md">
          <img src="https://i.imgur.com/zpBizbf.png" alt="ClicStar Logo" className="h-24" />
        </div>
        <h2 className="text-4xl font-bold uppercase">La Collection « Clic »</h2>
        <p className="mt-2 text-gray-300">Vivez les bogues, les plantages, pis le pur génie.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white border-4 border-white"
            onClick={() => onImageClick(image.src)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onImageClick(image.src)}
            aria-label={`View larger image for ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            {/* <ClicLogo /> */}
          </div>
        ))}
      </div>
       {hasMore && (
        <div ref={loaderRef} className="text-center py-10" role="status" aria-label="Loading more content">
            <svg aria-hidden="true" className="inline w-10 h-10 text-gray-400 animate-spin fill-[#f39c12]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading more failures...</span>
        </div>
      )}
    </section>
  );
};

export default Gallery;
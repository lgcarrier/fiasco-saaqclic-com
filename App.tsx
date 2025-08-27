import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import ImageModal from './components/ImageModal';
import { ALL_GALLERY_IMAGES, IMAGES_PER_PAGE } from './constants';
import type { GalleryImage } from './types';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>(
    ALL_GALLERY_IMAGES.slice(0, IMAGES_PER_PAGE)
  );
  const [isLoading, setIsLoading] = useState(false);

  const hasMoreImages = displayedImages.length < ALL_GALLERY_IMAGES.length;

  const openModal = useCallback((imageUrl: string) => {
    setSelectedImage(imageUrl);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMoreImages) return;

    setIsLoading(true);
    // Simulate network delay for a better UX with the loading spinner
    setTimeout(() => {
      const currentLength = displayedImages.length;
      const nextImages = ALL_GALLERY_IMAGES.slice(
        currentLength,
        currentLength + IMAGES_PER_PAGE
      );
      setDisplayedImages((prevImages) => [...prevImages, ...nextImages]);
      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMoreImages, displayedImages.length]);


  return (
    <div className="min-h-screen bg-[#e0e0e0] text-gray-800">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Gallery
          images={displayedImages}
          onImageClick={openModal}
          onLoadMore={handleLoadMore}
          hasMore={hasMoreImages}
        />
        <About />
      </main>
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
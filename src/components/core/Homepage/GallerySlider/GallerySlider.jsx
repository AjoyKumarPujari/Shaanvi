import React from 'react'
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider'
const GallerySlider = () => {
    const images = [
        'https://drive.google.com/file/d/1xGpkIcxG0mEmMRv51SVdJnugJqE1jbjc/view',
        'https://drive.google.com/file/d/1xGpkIcxG0mEmMRv51SVdJnugJqE1jbjc/view',
        'https://drive.google.com/file/d/1xGpkIcxG0mEmMRv51SVdJnugJqE1jbjc/view',
        // Add more image URLs here
      ];
  return (
    <ImageSlider images={images} />
  )
}

export default GallerySlider
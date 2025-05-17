"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/app/page.module.css";
const images = [
  {
    original: "/hickoku/perfume-1.jpeg",
    thumbnail: "/hickoku/perfume-1.jpeg",
  },
  {
    original: "/hickoku/perfume-2.jpeg",
    thumbnail: "/hickoku/perfume-2.jpeg",
  },
  {
    original: "/hickoku/perfume-3.jpeg",
    thumbnail: "/hickoku/perfume-3.jpeg",
  },
];

export default function ImageSlider() {
  return (
    <>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showNav={false}
        showPlayButton={false}
        thumbnailPosition="left"
      />
    </>
  );
}

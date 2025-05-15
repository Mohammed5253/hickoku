"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/app/page.module.css";
const images = [
  {
    original: "https://lipsum.app/random/640x750",
    thumbnail: "https://lipsum.app/random/100x75",
  },
  {
    original: "https://lipsum.app/random/640x750",
    thumbnail: "https://lipsum.app/random/100x75",
  },
  {
    original: "https://lipsum.app/random/640x750",
    thumbnail: "https://lipsum.app/random/100x75",
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

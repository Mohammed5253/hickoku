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
      showNav={true}
      showPlayButton={false}
      thumbnailPosition="left"
      autoPlay={true}
      slideInterval={3000}
      renderLeftNav={(onClick, disabled) => (
        <button
          type="button"
          className="image-gallery-icon image-gallery-left-nav"
          style={{ fontSize: "4rem", width: "48px", height: "48px", lineHeight: "48px" }}
          onClick={onClick}
          disabled={disabled}
          aria-label="Previous Slide"
        >
          ‹
        </button>
      )}
      renderRightNav={(onClick, disabled) => (
        <button
        type="button"
        className="image-gallery-icon image-gallery-right-nav"
        style={{ fontSize: "4rem", width: "48px", height: "48px", lineHeight: "48px" }}
        onClick={onClick}
        disabled={disabled}
        aria-label="Next Slide"
        >
        ›
        </button>
      )}
      />
    </>
  );
}

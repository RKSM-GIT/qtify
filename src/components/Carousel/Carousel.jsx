// src/components/Carousel/Carousel.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import "swiper/css";

const Carousel = ({
  items,
  renderItem,
  slidesPerView = { xs: 3, sm: 5, md: 7 },
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Box sx={{ position: "relative", px: 3 }}>
      {!isBeginning && swiperInstance && (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <NavButton
            direction="prev"
            onClick={() => swiperInstance.slidePrev()}
          />
        </Box>
      )}

      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: slidesPerView.xs },
          600: { slidesPerView: slidesPerView.sm },
          900: { slidesPerView: slidesPerView.md },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id ?? index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      {!isEnd && swiperInstance && (
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <NavButton
            direction="next"
            onClick={() => swiperInstance.slideNext()}
          />
        </Box>
      )}
    </Box>
  );
};

// Inline minimal nav button — replace SVG paths with your assets
const NavButton = ({ direction, onClick }) => (
  <Box onClick={onClick} sx={navBtnStyle}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      {direction === "prev" ? (
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      ) : (
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      )}
    </svg>
  </Box>
);

const navBtnStyle = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  backgroundColor: "#34C94B",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  userSelect: "none",
  "&:hover": { backgroundColor: "#2aaa3f" },
};

export default Carousel;

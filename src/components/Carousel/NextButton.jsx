// src/components/Carousel/NextButton.jsx
import { useSwiper } from "swiper/react";
import { Box } from "@mui/material";
import RightCarouselSvg from "../../assets/right-carousel-arrow.svg";

const NextButton = ({ hidden }) => {
  const swiper = useSwiper();
  if (hidden) return null;

  return (
    <Box onClick={() => swiper.slidePrev()} sx={navBtnStyle}>
      <img src={RightCarouselSvg} alt="Next" />
    </Box>
  );
};

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

export default NextButton;

import { Button as ButtonMui } from "@mui/material";

const Button = ({ text, handleButtonClick }) => {
  return (
    <ButtonMui
      sx={{
        bgcolor: "black",
        color: "primary.main",
        "&:hover": {
          bgcolor: "#2a2929",
        },
      }}
      variant="contained"
      onClick={handleButtonClick}
    >
      {text}
    </ButtonMui>
  );
};

export default Button;

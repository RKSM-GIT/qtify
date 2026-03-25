import { Box, Chip, Typography } from "@mui/material";

const SongCard = ({ image, title, follows, isLike = false }) => {
  return (
    <Box>
      {/* Card container */}
      <Box
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "white",
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: 150,
            objectFit: "cover",
          }}
        />

        {/* White section */}
        <Box sx={{ px: "8px", py: "16px" }}>
          <Chip
            label={`${follows} ` + (isLike ? "Likes" : "Follows")}
            sx={{
              bgcolor: "black",
              color: "white",
              fontWeight: 600,
            }}
          />
        </Box>
      </Box>

      {/* Title below */}
      <Typography
        sx={{
          mt: 1,
          color: "white",
          fontSize: 16,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SongCard;

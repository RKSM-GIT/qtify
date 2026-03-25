// src/components/Section/Section.jsx
import {
  Accordion,
  AccordionSummary,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import SongCard from "../SongCard/SongCard";
import Carousel from "../Carousel/Carousel";

const Section = ({ sectionTitle, apiUrl, initExpanded = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [isExpanded, setIsExpanded] = useState(initExpanded);

  const fetchSongs = async () => {
    try {
      setIsLoading(true);
      const songResponse = await axios.get(apiUrl);
      setSongs(songResponse.data);
      setIsLoading(false);
    } catch (err) {
      console.log("Error fetching songs", err);
    }
  };

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSongCard = (song) => (
    <SongCard image={song.image} title={song.title} follows={song.follows} />
  );

  return (
    <Accordion
      expanded={isExpanded}
      onChange={() => setIsExpanded((prev) => !prev)}
      slots={{ transition: ({ children }) => children }}
    >
      <AccordionSummary
        expandIcon={
          <Typography sx={{ fontWeight: 500, color: "#34C94B" }}>
            {isExpanded ? "Collapse" : "Show All"}
          </Typography>
        }
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          "& .MuiAccordionSummary-expandIconWrapper": {
            transform: "none !important",
          },
        }}
      >
        <Typography component="span">{sectionTitle}</Typography>
      </AccordionSummary>

      <Box sx={{ px: 2, pb: 2 }}>
        {isLoading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}

        {!isLoading &&
          (isExpanded ? (
            <Grid container spacing={3} columns={{ xs: 3, sm: 5, md: 7 }}>
              {songs.map((song) => (
                <Grid key={song.id} size={1}>
                  {renderSongCard(song)}
                </Grid>
              ))}
            </Grid>
          ) : (
            <Carousel
              items={songs}
              renderItem={renderSongCard}
              slidesPerView={{ xs: 3, sm: 5, md: 7 }}
            />
          ))}
      </Box>
    </Accordion>
  );
};

export default Section;

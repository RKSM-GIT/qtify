import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Tab,
  Tabs,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import SongCard from "../SongCard/SongCard";
import Carousel from "../Carousel/Carousel";

const TabSection = ({ sectionTitle, apiUrl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  const fetchSongs = async () => {
    try {
      setIsLoading(true);
      const songResponse = await axios.get(apiUrl);
      setSongs(songResponse.data);
    } catch (err) {
      console.log("Error fetching songs", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const genres = useMemo(() => {
    const seen = new Set();
    return songs
      .map((song) => song.genre?.label)
      .filter((label) => label && !seen.has(label) && seen.add(label));
  }, [songs]);

  const filteredSongs = useMemo(() => {
    if (activeTab === "All") return songs;
    return songs.filter((song) => song.genre?.label === activeTab);
  }, [songs, activeTab]);

  const renderSongCard = (song) => (
    <SongCard
      image={song.image}
      title={song.title}
      follows={song.likes}
      isLike
    />
  );

  return (
    <Card>
      <CardHeader
        title={sectionTitle}
        titleTypographyProps={{ fontSize: 16 }}
      />

      <CardContent sx={{ px: 2, pb: 2 }}>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 2 }}
        >
          <Tab label="All" value="All" />
          {genres.map((genre) => (
            <Tab key={genre} label={genre} value={genre} />
          ))}
        </Tabs>

        {isLoading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}

        {!isLoading && (
          <Carousel
            items={filteredSongs}
            renderItem={renderSongCard}
            slidesPerView={{ xs: 3, sm: 5, md: 7 }}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default TabSection;

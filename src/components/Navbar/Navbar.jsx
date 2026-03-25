import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { Box } from "@mui/material";

function Navbar({ searchData }) {
  return (
    <Box
      component="nav"
      className={styles.navbar}
      sx={{ bgcolor: "primary.main" }}
    >
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button text="Give Feedback" />
    </Box>
  );
}

export default Navbar;

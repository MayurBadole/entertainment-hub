import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom' ;

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate.push("/");
    } else if (value === 1) {
      navigate.push("/movies");
    } else if (value === 2) {
      navigate.push("/series");
    } else if (value === 3) {
      navigate.push("/search");
    }
  }, [value, navigate]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        bgcolor: "#2d313a",
        zIndex: 100,
      }}
      value={value}
      onChange={handleChange}
    >
      {" "}
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        value="trendings"
        icon={<WhatshotIcon />}
      />{" "}
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        value="movies"
        icon={<MovieFilterIcon />}
      />{" "}
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        value="tvSeries"
        icon={<TvIcon />}
      />{" "}
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search "
        value="search"
        icon={<SearchIcon />}
      />{" "}
    </BottomNavigation>
  );
}

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
 
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from "@mui/icons-material/Whatshot";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

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
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trendings"
        value="trendings"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        value="movies"
        icon={<MovieFilterIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        value="tvSeries"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search "
        value="search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const ClientHeader = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,217,179,0.4234943977591037) 83%, rgba(0,212,255,1) 100%)",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Client Side
          </Typography>
          <Button color="inherit">
            <Link to={""}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/about"}>About</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/countries"}>Countries</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/contact"}>Contact</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ClientHeader;

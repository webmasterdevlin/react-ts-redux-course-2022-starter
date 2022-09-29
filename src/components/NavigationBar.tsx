import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { pathNames } from "../LazyRoutes";
import TotalOfCharacters from "./TotalOfCharacters";

const NavigationBar = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const heroes: any[] = [];
  const villains: any[] = [];
  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar>
        <Box>
          <Button
            className={classes.button}
            color="inherit"
            onClick={() => navigate(pathNames.home)}
          >
            HOME
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.button}
            color="inherit"
            onClick={() => navigate(pathNames.heroes)}
          >
            HEROES
          </Button>
          <TotalOfCharacters collection={heroes} dataTestId={"total-heroes"} />
        </Box>
        <Box>
          <Button
            className={classes.button}
            color="inherit"
            onClick={() => navigate(pathNames.villains)}
          >
            VILLAINS
          </Button>
          <TotalOfCharacters
            collection={villains}
            dataTestId={"total-villains"}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: "0 0.5rem",
      "&:focus": {
        outline: "none",
      },
    },
  })
);

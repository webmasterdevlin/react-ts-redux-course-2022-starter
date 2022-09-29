import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import FormSubmission from "../components/FormSubmission";
import TitleBar from "../components/TitleBar";
import UpdateUiLabel from "../components/UpdateUiLabel";

import {
  deleteHeroAction,
  getHeroesAction,
  postHeroAction,
} from "../features/heroes/heroAsyncActions";
import { deleteAxios, getAxios } from "../axios/generic-api-calls";
import { HeroModel } from "../features/heroes/heroTypes";
import { EndPoints } from "../axios/api-config";

const HeroesPage = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  const heroes = [];
  const loading = false;

  // local state
  const [counter, setCounter] = useState("0");

  useEffect(() => {
    //TODO
  }, []);

  /*
   *  IF NO heroAsyncActions.ts and extraReducers
   *  Can avoid race condition issue
   *  Can be used with multiple HTTP request
   *  Can be used with states that don't belong in the store
   *  Can easily be understood by developers who are new to React Redux
   *  Easy to reason about
   *  Easy to do optimistic updates
   * */
  const handleGetHeroes = async () => {
    //TODO
  };

  /*
   *  IF NO heroAsyncActions.ts and extraReducers
   *  Can avoid race condition issue
   *  Can be used with multiple HTTP request
   *  Can be used with states that don't belong in the store
   *  Can easily be understood by developers who are new to React Redux
   *  Easy to reason about
   *  Easy to do optimistic updates
   * */
  const handleFetchHeroes = () => {
    //TODO
  };

  /*
   *  IF NO heroAsyncActions.ts and extraReducers
   *  Can avoid race condition issue
   *  Can be used with multiple HTTP request
   *  Can be used with states that don't belong in the store
   *  Can easily be understood by developers who are new to React Redux
   *  Easy to reason about
   *  Easy to do optimistic updates
   * */
  const handleDeleteHero = async (id: string) => {
    //TODO
  };

  return (
    <div>
      <TitleBar
        title={loading ? "Loading.. Please wait.." : "Super Heroes Page"}
      />
      <FormSubmission
        handleCreateAction={() => {
          //TODO
        }}
      />
      <UpdateUiLabel />
      <>
        {heroes.map((h) => (
          <Box
            key={h.id}
            mb={2}
            display={"flex"}
            flexDirection={smallScreen ? "column" : "row"}
            justifyContent={"space-between"}
            data-testid={"card"}
          >
            <Typography>
              <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
              {counter === h.id && <span> - marked</span>}
            </Typography>
            <div>
              <Button
                className={classes.button}
                variant={"contained"}
                data-testid={"mark-button"}
                onClick={() => {
                  //TODO
                }}
              >
                Mark
              </Button>{" "}
              <Button
                className={classes.button}
                variant={"contained"}
                color={"secondary"}
                data-testid={"remove-button"}
                onClick={() => {
                  //TODO
                }}
              >
                Remove
              </Button>{" "}
              <Button
                className={classes.button}
                variant={"outlined"}
                color={"secondary"}
                data-testid={"delete-button"}
                onClick={async () => {
                  // TODO
                }}
              >
                DELETE in DB
              </Button>
            </div>
          </Box>
        ))}
      </>
      {heroes.length === 0 && (
        <Button
          data-testid={"refetch-button"}
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={() => {
            //TODO
          }}
        >
          Re-fetch
        </Button>
      )}
    </div>
  );
};

export default HeroesPage;

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

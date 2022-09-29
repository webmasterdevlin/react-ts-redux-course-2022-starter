import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { VillainModel } from "../features/villains/query";
import { createStyles, makeStyles } from "@mui/styles";
import TitleBar from "../components/TitleBar";
import UpdateUiLabel from "../components/UpdateUiLabel";
import FormSubmission from "../components/FormSubmission";

const VillainsPage = () => {
  const dispatch: any = {};

  // local state
  const [counter, setCounter] = useState("0");

  const data = [];
  const isFetching = false;
  const refetch = {};

  const softDeleteVillain = (id: string) => {
    //TODO: dispatch action
  };
  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  return (
    <div>
      <TitleBar
        title={isFetching ? "Loading.. Please wait.." : "Villains Page"}
      />
      <FormSubmission
        handleCreateAction={() => {
          //TODO
        }}
      />
      <UpdateUiLabel />
      <>
        {data.map((v) => (
          <Box
            key={v.id}
            mb={2}
            display={"flex"}
            flexDirection={smallScreen ? "column" : "row"}
            justifyContent={"space-between"}
            data-testid={"card"}
          >
            <Typography>
              <span>{`${v.firstName} ${v.lastName} is ${v.knownAs}`}</span>
              {counter === v.id && <span> - marked</span>}
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
      {data.length === 0 && (
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

export default VillainsPage;

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

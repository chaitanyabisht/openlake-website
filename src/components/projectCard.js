import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  url,
  Tooltip,
} from "@material-ui/core";
import { Gold, DarkBlue, Blue, Orange, White, Black } from "./colors";
import projectcard from "../images/projectcard.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 50,
    margin: 20,
  },
  title: {
    fontSize: 10,
  },
  bottom: {
    marginBottom: 12,
    fontSize: 14,
  },
  top: {
    height: 100,
    backgroundImage: `url(${projectcard})`,
    color: Black,
    backgroundSize: "100 hidden",
    padding: 20,
  },
  middle: {
    padding: 10,
    height: 120,
  },
});

export default function ProjectCard(x) {
  const cardclasses = useStyles();

  return (
    <Grid container direction="column" item xs={12} sm={6} spacing={3}>
      <Card className={cardclasses.root}>
        <CardActionArea>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={cardclasses.top}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {x.Name}
            </Typography>
          </Grid>
          <CardContent className={cardclasses.middle}>
            <Typography variant="body2" color="textSecondary" component="p">
              Description: {x.Description} <br />
              Tech Stack: {x.Description}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Wanna work on this project? <br />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Contact: {x.Student} {x.Contact}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

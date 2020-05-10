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
    width: 70,
  },
  top: {
    backgroundImage: `url(${projectcard})`,
    color: Black,
    backgroundSize: "100 hidden",
    padding: 20,
  },
  middle: {
    padding: 10,
  },
});

export default function ProjectCard(x) {
  const cardclasses = useStyles();

  return (
    <Grid container direction="column" item lg={4} >
      <Card className={cardclasses.root}>
        <CardActionArea>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={cardclasses.top}
            
          >
            <Typography gutterBottom variant="h5" component="h2">
              {x.Name}
            </Typography>
          </Grid>
          <CardContent className={cardclasses.middle}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              // alignItems="flex-start"
              wrap="nowrap"
              spacing={1}
              >
                < Grid item >
                  <Typography variant="body2" color="textSecondary" component="p" >
                    Description: {x.Description} 
                  </Typography>
                </Grid>
                < Grid item>
                  <Typography variant="body2" color="textSecondary" component="p" >
                    Tech Stack: {x.Description} 
                  </Typography>
                </Grid>
                < Grid item>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Wanna work on this project? 
                  </Typography>
                </Grid>
                < Grid item>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Contact: {x.Student} {x.Contact}
                  </Typography>
                </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={x.Link}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

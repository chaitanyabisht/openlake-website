import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import projectcard from "../images/projectbg.jpg";

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
    backgroundSize: "100 hidden",
    padding: 20,
  },
  middle: {
    padding: 10,
    height: 200,
  },
});

export default function ProjectCard(x) {
  const cardclasses = useStyles();

  return (
    <Grid container direction="column" item lg={4} >
      <Card className={cardclasses.root} >
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
              // wrap="nowrap"
              spacing={1}
              >
                < Grid item >
                  <Typography variant="body2" color="textSecondary" component="p" >
                    Description: {x.Description} 
                  </Typography>
                </Grid>
                < Grid item>
                  <Typography variant="body2" color="textSecondary" component="p" >
                    Tech Stack: {x.TechStack} 
                  </Typography>
                </Grid>
                < Grid item>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Wanna know more about the project? 
                  </Typography>
                </Grid>
                < Grid item>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Contact: {x.StudentsContact}
                  </Typography>
                </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid
          container
          direction="row"
          justify="space-between"
          >
          <Button size="small" color="primary" href={x.Link}>
            Learn More
          </Button>
          <Button size="small" color="primary" >
          </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

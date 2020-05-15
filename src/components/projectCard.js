import React from 'react';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardActionArea,
  makeStyles,
  Box,
} from '@material-ui/core';
import projectcard from '../images/projectcard2.png';


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
    backgroundColor : "#1EA3D2", 
    // opacity: 0.8,
    backgroundRepeat: "no-repeat" ,
    backgroundPosition: "right top",
    overflow: 'hidden',
    backgroundImage: `url(${projectcard})`,
    backgroundSize: 500,
    padding: 20,
    height: 80, 
    
  },
  middle: {
    padding: 10,
    height: 250,
    // flexGrow: 2,
  },
});

export default function ProjectCard(x) {
  const cardclasses = useStyles();

  return (
    <Grid container direction="column" item lg={4} key={x.Name}>
      <Card className={cardclasses.root} >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            className={cardclasses.top}

          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: 'white' }}
            >
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
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Box fontWeight="fontWeightMedium"> Description: </Box> {x.Description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                <Box fontWeight="fontWeightMedium">Tech Stack: </Box> {x.TechStack}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p" >
                <Box fontWeight="fontWeightMedium">Students contributing to this project and their Github IDs: </Box>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  {x.StudentsContact}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

        <CardActions>
          <Grid container direction="row" justify="space-between">
            <Button size="small" color="primary" href={x.Link}>
              Learn More
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

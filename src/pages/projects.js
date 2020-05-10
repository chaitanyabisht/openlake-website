import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/projectCard";
import { ProjectForm } from "../components/projectForms";
import projects from "../components/details_projects";
import {White, Black, BlueWhite} from "../components/colors"
import { 
  Grid,
  Box, 
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: White,
    margin: 0,
  },
  title: {
    // backgroundImage: `url(${projectcard})`,
    backgroundColor: BlueWhite,
    color: Black,
    height: 300,
    padding: 30,
    marginBottom: 10,
  },
  form: {
    padding: 30,
  }
});

export default function Projects() {
  const classes = useStyles();
  
  return (
    <Layout>
      <SEO title="Projects" />
      <Grid className={classes.root}>
       
        <Grid 
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.title}
            >
            <Box>
              <Typography  variant="h2" component="h2">
                Projects and Community <br/>
              </Typography>
            </Box>
            </Grid>
         {/* <ProjectForm/> */}
        {/* <SimpleTabs/> */}
        {/* <Searchbar/>  */}
        <Grid spacing={1}
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      >
        { projects.map(x => (
        ProjectCard(x)
        ))}
        </Grid>
       </Grid>
    </Layout>
  );
}
  

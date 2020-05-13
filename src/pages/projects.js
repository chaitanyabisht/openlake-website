import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/projectCard";
import projects from "../components/details_projects";
import { Grid, Box, Typography, Container } from "@material-ui/core";
import SimpleExpansionPanel from "../components/projectForms";

const useStyles = makeStyles({
  root: {
    margin: 0,
  },
  title: {
    padding: 5,
    marginBottom: 10,
  },
  titleGrid: {
    height: 300,
    padding: 40
  },
  subTitle: {
    padding:5,
    marginBottom: 10,
  },
  form: {
    padding: 30,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Projects" />
      <Grid className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          className={classes.titleGrid}
        >
          <Box className={classes.title}>
            <Typography variant="h2" component="h2">
              Projects  <br />
            </Typography>
            </Box>
            <Box className={classes.subTitle}>
            <Typography variant="h6" component="h2">
              Connect. Contribute. Build.
            </Typography>
          </Box>
        </Grid>
        <Container>
        <SimpleExpansionPanel/>
        </Container>
        {/* <SimpleTabs/> */}
        {/* <Searchbar/>  */}
        <Grid
          spacing={1}
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {projects.map(x => ProjectCard(x))}
        </Grid>
      </Grid>
    </Layout>
  );
}

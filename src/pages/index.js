import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Typography, Paper, makeStyles, Grid } from '@material-ui/core';
import Waves from '../images/wave.svg';
import Logo from '../images/logo-no-text.png';

const useStyles = makeStyles(theme => ({
  centerText: {
    textAlign: 'center',
  },
  svgWave: {
    position: 'relative',
    top: 20,
    '& path': {
      fill:
        theme.palette.primary[
        theme.palette.type === 'light' ? 'dark' : 'light'
        ],
    },
  },
  primaryBg: {
    backgroundColor:
      theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light'],
    color: theme.palette.background.default,
  },
  logo: {
    align: 'center',
  }

}));

export default function IndexPage() {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div
          className={classes.centerText}
          style={{
            boxSizing: 'border-box',
            padding: '50px',
          }}
        >
          <Grid container direction="row" alignItems="center" justify='center'>
          <Grid item>
            <img src={Logo} alt="OpenLake Logo" className={classes.logo} />
          </Grid>
          <Grid item>
            <Typography variant="h1">OpenLake</Typography>
          </Grid>
          </Grid>
          <Typography paragraph>
            Connecting Students to the World of Open Source Development
          </Typography>
        </div>

        <Waves className={classes.svgWave} />

        <Paper
          className={`${classes.centerText} ${classes.primaryBg}`}
          elevation={0}
          style={{
            position: 'relative',
            zIndex: 5,
          }}
        >
          {/* #0090dd , #0067ab,#00426e*/}
          <Container maxWidth="lg" style={{ padding: '3rem' }}>
            <Typography variant="h4" gutterBottom>
              What is OpenLake
            </Typography>

            <Typography paragraph className="details">
              As the world is moving towards a connected society. The
              communities driving the development of open source technologies
              are becoming more prominent. Numerous software giants like Google
              and Microsoft are embracing the idea of Open Source Software. With
              Microsoft's Campaign: “ Microsoft{' '}
              <span role="img" aria-label="Heart">
                ❤️
              </span>{' '}
              Open Source ”, the importance of open source is visible to the
              world. For example, Tensorflow and Pytorch are 2 very important
              Machine learning libraries that heavily govern the advancements in
              Artificial Intelligence today, both of these are driven and
              developed by open source communities in collaboration with
              corporate firms.
            </Typography>

            <Typography paragraph className="details">
              With the importance of Open Source made crystal clear. There is
              one problem that needs to be addressed: Connecting people with
              Open Source Communities. The idea of OpenLake is to act as a
              bridge between Students and the World of Open Source Development.
            </Typography>

            <br />

            <Typography variant="h5">Functioning</Typography>

            <Typography paragraph className="details">
              This independent entity will be a place to have discussions on
              open source communities. The entity will encourage and help
              students to become a part of open source initiatives like Google
              Summer of Code, Outreachy etc.
            </Typography>

            <Typography paragraph className="details">
              At a later stage, the students who have worked in open source
              organisations may encourage other students to join them. Ensuring
              a steady flow of human resources to these communities. There will
              be fairs where students can talk about the work they did for the
              FOSS (Free Open Source Software) communities and add more people
              to the organisations they are part of.
            </Typography>

            <br />
            <Typography variant="h5" gutterBottom>
              Structure
            </Typography>

            <Typography paragraph className="details">
              There will be a set of individuals who will act as mentors and
              ensure that the events related to OpenLake happen periodically.
              Currently, individuals who have had their pull requests merged
              into reputed Open Source Organisation will be eligible to be
              mentors.
            </Typography>
          </Container>
        </Paper>

        {/* <div
        className="explore-projects"
        style={{
          textAlign: 'center',
          padding: '3rem',
        }}
      >
        <Typography variant="h3" gutterBottom>
          2,000 Projects and counting
        </Typography>
        <Typography paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores
          sint ad nesciunt tempora cumque itaque sed reprehenderit libero id,
          repellendus laborum?
        </Typography>
      </div> */}
      </div>
    </Layout>
  );
}

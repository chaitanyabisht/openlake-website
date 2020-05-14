import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TimeLineItem from '../components/TimeLineItem';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Star } from '@material-ui/icons';
import { Typography, Container, makeStyles } from '@material-ui/core';

import timelineData from '../../content/timeline.yaml';

const useStyles = makeStyles(theme => ({
  timelineCustom: {
    '&::before': {
      background: theme.palette.text.primary,
    },
    '& .vertical-timeline-element-icon': {
      background:
        theme.palette.primary[
          theme.palette.type === 'light' ? 'dark' : 'light'
        ],
      color: theme.palette.background.default,
      boxShadow: theme.shadows[2],
    },
  },
}));

const CommunityPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Community" />

      <Container>
        <Typography variant="h4" component="h2" style={{ margin: 30 }}>
          Community
        </Typography>

        <VerticalTimeline className={classes.timelineCustom}>
          {timelineData.map(data => (
            <TimeLineItem
              key={`${data.title}/${data.subtitle}/${data.date}`}
              {...data}
            />
          ))}

          <VerticalTimelineElement icon={<Star />} />
        </VerticalTimeline>
      </Container>
    </Layout>
  );
};

export default CommunityPage;

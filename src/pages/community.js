import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TimeLineItem from '../components/TimeLineItem';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Star } from '@material-ui/icons';
import { useTheme, Typography, Container } from '@material-ui/core';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const CommunityPage = () => {
  const { palette, shadows } = useTheme();

  return (
    <Layout>
      <SEO title="Community" />

      <Container>
        <Typography variant="h4" component="h2" style={{ margin: 30 }}>
          Community
        </Typography>

        <VerticalTimeline>
          <TimeLineItem
            orgName="DBpedia"
            contributor="Anand PanchBhai"
            content={lorem}
            date="2019"
          />
          <TimeLineItem
            orgName="DBpedia"
            contributor="Anand PanchBhai"
            content={lorem}
            date="2019"
          />
          <TimeLineItem
            orgName="DBpedia"
            contributor="Anand PanchBhai"
            content={lorem}
            date="2019"
          />
          <VerticalTimelineElement
            iconStyle={{
              background: palette.primary[palette.type],
              color: '#fff',
            }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </Container>
    </Layout>
  );
};

export default CommunityPage;

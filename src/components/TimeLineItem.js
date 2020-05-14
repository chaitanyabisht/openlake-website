import React from 'react';
import PropTypes from 'prop-types';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Typography, makeStyles } from '@material-ui/core';
import { Code } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  timelineEl: {
    '& .vertical-timeline-element-content': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
    },
    '& .vertical-timeline-element-content-arrow': {
      borderRight: `7px solid  ${theme.palette.background.paper}`,
    },
  },
}));

const TimeLineItem = ({ title, subtitle, text, date }) => {
  const classes = useStyles();

  return (
    <VerticalTimelineElement
      className={classes.timelineEl}
      date={date}
      icon={<Code />}
    >
      <Typography variant="h6" className="vertical-timeline-element-title">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className="vertical-timeline-element-subtitle"
      >
        {subtitle}
      </Typography>
      <Typography component="pre" variant="body1" style={{ paddingTop: '1em' }}>
        {text}
      </Typography>
    </VerticalTimelineElement>
  );
};

TimeLineItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default TimeLineItem;

import React from 'react';
import PropTypes from 'prop-types';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTheme, Typography } from '@material-ui/core';
import { Code } from '@material-ui/icons';

const TimeLineItem = ({ org, contributor, text, date }) => {
  const { palette, shadows } = useTheme();

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{
        borderRight: `7px solid  ${palette.background.paper}`,
      }}
      contentStyle={{
        backgroundColor: palette.background.paper,
        boxShadow: shadows[2],
      }}
      date={date}
      iconStyle={{
        background: palette.primary[palette.type],
        color: '#fff',
        boxShadow: shadows[2],
      }}
      icon={<Code />}
    >
      <Typography variant="h6" className="vertical-timeline-element-title">
        {org}
      </Typography>
      <Typography
        variant="subtitle1"
        className="vertical-timeline-element-subtitle"
      >
        {contributor}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </VerticalTimelineElement>
  );
};

TimeLineItem.propTypes = {
  orgName: PropTypes.string,
  contributor: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
};

export default TimeLineItem;

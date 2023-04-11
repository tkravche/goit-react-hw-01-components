import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, StatisticsList, Title, StatisticsSection } from './Statistics.styled';

export const Statistics = ({ title = null, stats }) => {
  return (
    <StatisticsSection>
      <Title>{title ? title : ''}</Title>
      <StatisticsList>
        {stats.map(stats => {
          return (
            <ListItem key = {stats.id}>
              <span class="label">{stats.label}</span>
              <span class="percentage">{stats.percentage}%</span>
            </ListItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf.isRequired,
};

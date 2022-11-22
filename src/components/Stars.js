import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const propTypes = {
  count: PropTypes.number,
};

const defaultProps = {
  count: 0,
};

const Stars = ({ count }) => {
  if (count < 0 || count > 5 || !Number.isInteger(count)) {
    return;
  }

  const indices = [];
  for (let i = 0; i < count; i++) {
    indices.push(i);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {indices.map((index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

Stars.propTypes = propTypes;

Stars.defaultProps = defaultProps;

export default Stars;

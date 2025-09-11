import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({
  title,
  type = 'h1',
  className = '',
  isSpan = false,
  spanText = '',
  spanClass = ''
}) => {
  const Tag = type;

  return (
    <Tag className={className}>
      {title}
      {isSpan && <span className={spanClass}> {spanText}</span>}
    </Tag>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  isSpan: PropTypes.bool,
  spanText: PropTypes.string,
  spanClass: PropTypes.string,
};

export default Heading;

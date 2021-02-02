import React from 'react';
import PropTypes from 'prop-types';
import attributes from '../../constants/attributes';

const SelectedAttribute = (props) => {
  const { 
    selectedAttribute,
    attributeValue,
    isClosed,
    isWinner
  } = props;
  return selectedAttribute && isClosed ? (
    <div className="selected-attribute">
    {isWinner ?
      <span className="badge badge-success">{attributes[selectedAttribute]}:
    {attributeValue}</span> :
     <span>    {attributes[selectedAttribute]}:
    {attributeValue}</span>
    }
    </div>
  ) : (
    <div className="selected-attribute">Select an attribute</div>
  );
}

SelectedAttribute.propTypes = {
  selectedAttribute: PropTypes.string,
  attributeValue: PropTypes.string,
}

export default SelectedAttribute;

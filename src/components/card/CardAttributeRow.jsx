import React from 'react';
import PropTypes from 'prop-types';
import { STATUS_READY, STATUS_DONE, STATUS_OVER } from '../../constants/constants';

const CardAttributeRow =(props) => {
    const {
      attributeKey,
      label,
      value,
      status,
      selectedAttribute,
      handleAttributeClick
    } = props;

  const handleAttributeSelected = () => {
    handleAttributeClick(attributeKey);
  }
  console.log("the status ", status);
  const attributeValue = status === STATUS_READY ? (
    <div
      className={`card-attribute-value ${selectedAttribute === attributeKey && 'selected'}`}
      onClick={handleAttributeSelected}
    >{value}</div>
  ) : (
    <span
      className={`card-attribute-value ${selectedAttribute === attributeKey && 'selected'}`}
    >{value}</span>);

  return (
    <div 
    className={status === STATUS_DONE || status === STATUS_OVER ? "card-attribute-row disabled" : "card-attribute-row"}
    onClick={handleAttributeSelected}
    >
      <span className={`card-attribute-label ${selectedAttribute === attributeKey && 'selected'}`}>
        {label}:
      </span>
      {attributeValue}
    </div>
  );
}

CardAttributeRow.propTypes = {
    attributeKey: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleAttributeClick: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired
}

export default CardAttributeRow;

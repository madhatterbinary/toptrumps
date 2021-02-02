import React from 'react';
import PropTypes from 'prop-types';
import CardAttributeRow from './CardAttributeRow';
import attributes from '../../constants/attributes';

const CardAttributeList = (props) => {
  const {
    card,
    handleAttributeSelection,
    status,
    selectedAttribute,
  } = props;

  const attributeListItems = Object.keys(attributes).map((attributeKey) => {
    return (
    <CardAttributeRow
      key={`attribute-${attributeKey}`}
      attributeKey={attributeKey}
      label={attributes[attributeKey]}
      value={card[attributeKey] || ""}
      handleAttributeClick={handleAttributeSelection}
      selectedAttribute={selectedAttribute}
      status={status}
    />
    );
  });

  return (
    <div className="card-attribute-list">
      {attributeListItems}
    </div>
  );
}

CardAttributeList.propTypes = {
  card: PropTypes.object.isRequired,
  handleAttributeSelection: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  selectedAttribute: PropTypes.string
}

export default CardAttributeList;

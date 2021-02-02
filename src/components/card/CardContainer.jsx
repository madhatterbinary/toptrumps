import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import SelectedAttribute from './SelectedAttribute';

const CardContainer = (props) => {
  const {
    card,
    isClosed,
    isWinner,
    selectedAttribute,
    handleAttributeSelection,
    status,
  } = props;

  return (
    <div className={`card-container ${isWinner && 'winner'}`}>
      <Card 
        card={card}
        isClosed={isClosed}
        handleAttributeSelection={handleAttributeSelection}
        status={status}
        selectedAttribute={selectedAttribute}
      />
      {!isClosed ? (
      <SelectedAttribute
        selectedAttribute={selectedAttribute}
        attributeValue={card[selectedAttribute]}
        isClosed
        isWinner={isWinner}
      />
      ) : null}
      <div className="card-result">You won!</div>
    </div>
  );
}

CardContainer.propTypes = {
  card: PropTypes.object.isRequired,
  isClosed: PropTypes.bool.isRequired,
  isWinner: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  selectedAttribute: PropTypes.string,
  handleAttributeSelection: PropTypes.func.isRequired,
}

export default CardContainer;

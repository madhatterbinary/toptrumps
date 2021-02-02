import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardAttributeList from './CardAttributeList';

const Card = (props) => {
  const {
    isClosed,
    card,
    handleAttributeSelection,
    status,
    selectedAttribute,
    isWinner
  } = props;

  return (
    <div className={`card ${isClosed && 'closed'}`}>
      {!isClosed ? (
        <div className="card-body">
          <CardHeader
            title={card.name}
            model={card.model}
            manufacturer={card.manufacturer}
          />
          <CardImage
            image={card.image}
          />
          <CardAttributeList
            card={card}
            handleAttributeSelection={handleAttributeSelection}
            status={status}
            selectedAttribute={selectedAttribute || ""}
            isWinner={isWinner}
          />
        </div>
      ) : null}
    </div>
  );
}

Card.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  card: PropTypes.object.isRequired,
  handleAttributeSelection: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
}

export default Card;

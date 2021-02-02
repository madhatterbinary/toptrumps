import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../card/CardContainer';
import {
  STATUS_READY,
  STATUS_OVER,
  PLAYER_1,
  PLAYER_2,
} from '../../constants/constants';

const GamePanel = (props) => {
  const {
    player1Card,
    player2Card,
    status,
    handleAttributeSelection,
    selectedAttribute,
    lastWinner,
    isDraw,
  } = props;

  return (
    <div className="game-panel">
      { status === STATUS_OVER && (
        <div className="game-nav-result">Game Over</div>
      )}
      { isDraw && (
        <div className="game-nav-result">Draw</div>
      )}
      <CardContainer
        card={player1Card}
        isClosed={status === STATUS_READY && lastWinner === PLAYER_2}
        handleAttributeSelection={handleAttributeSelection}
        selectedAttribute={selectedAttribute}
        status={status}
        isWinner={status !== STATUS_READY && lastWinner === PLAYER_1 && !isDraw}
      />
      <CardContainer 
        card={player2Card}
        isClosed={status === STATUS_READY && lastWinner !== PLAYER_2}
        handleAttributeSelection={handleAttributeSelection}
        selectedAttribute={selectedAttribute}
        status={status}
        isWinner={status !== STATUS_READY && lastWinner === PLAYER_2 && !isDraw}
      />
    </div>
  );
}

GamePanel.propTypes = {
  status: PropTypes.string.isRequired,
  player1Card: PropTypes.object,
  player2Card: PropTypes.object,
  lastWinner: PropTypes.string,
  selectedAttribute: PropTypes.string,
  handleAttributeSelection: PropTypes.func.isRequired,
}

export default GamePanel;

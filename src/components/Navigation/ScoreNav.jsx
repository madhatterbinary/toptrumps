import React from 'react';
import PropTypes from 'prop-types';

const ScoreNav = ({ player1Score, player2Score }) => (
  <div className="score-nav">
    <div className="player-scores">
      <div><span className="player-score">{player1Score}</span></div>
      <div><span className="player-score">{player2Score}</span></div>
    </div>
  </div>
);

ScoreNav.propTypes = {
  player1Score: PropTypes.number,
  player2Score: PropTypes.number
};

export default ScoreNav;

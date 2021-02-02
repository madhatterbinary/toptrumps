import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import { STATUS_READY, STATUS_OVER } from '../../constants/constants';

const ControlNav = (props) => { 
  const {
    status,
    isPlayEnabled,
    handleButtonClick,
  } = props;

  let buttonLabel;
  switch(status) {
    case STATUS_READY:
      buttonLabel = 'Play';
      break;
    case STATUS_OVER:
      buttonLabel = 'Play Again';
      break;
    default:
      buttonLabel = 'Shuffle';
  }

  return (
    <div className="control-nav">
      <Button
        buttonClassName={status === STATUS_READY ? 'dark' : 'top-trump'}
        buttonOnClick={handleButtonClick}
        buttonLabel={buttonLabel}
        buttonIsDisabled={!isPlayEnabled}
      />
    </div>
  );
}

ControlNav.propTypes = {
  status: PropTypes.string.isRequired,
  isPlayEnabled: PropTypes.bool.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default ControlNav;

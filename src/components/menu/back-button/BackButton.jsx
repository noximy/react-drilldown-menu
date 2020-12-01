import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft } from 'react-bootstrap-icons';

import {
  BackButtonSC,
  BackButtonIcon,
  BackButtonText,
} from './BackButton-styles';

export default function BackButton({ onClick }) {
  return (
    <BackButtonSC className="k-back-button-container" onClick={onClick}>
      <BackButtonIcon className="k-back-button-icon">
        <ArrowLeft />
      </BackButtonIcon>

      <BackButtonText className="k-back-button-text">Back</BackButtonText>
    </BackButtonSC>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

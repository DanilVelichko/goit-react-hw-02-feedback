import css from './FeedbackOptions.module.css';
import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <div className={css.counter}>
        <Button onClick={handleGood}>Good</Button>
        <Button onClick={handleNeutral}>Neutral</Button>
        <Button onClick={handleBad}>Bad</Button>
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;

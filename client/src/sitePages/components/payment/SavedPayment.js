import React from 'react';
import SavedPaypal from './SavedPaypal';
import SavedVisa from './SavedVisa';

const SavedPayment = () => {
  return <div>
      <div className='header'>
      Saved Payment Methods
      </div>
      <SavedVisa />
      <SavedPaypal />
  </div>;
};

export default SavedPayment;

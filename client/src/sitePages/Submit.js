import React from 'react';
import { Link } from 'react-router-dom';

const Submit = () => {
  return <div className='submit_page'>
  <div className='sub'>
      <div>Submitted Successfully</div>
      <Link to='/'>Go to Home Page</Link>

  </div>
  </div>;
};

export default Submit;

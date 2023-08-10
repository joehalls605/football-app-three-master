import React from 'react';
import 'tailwindcss/tailwind.css';

const Hint = ({ nationality, position, club }) => {
  return (
    <div className='font-semibold text-lg pb-4'>
       <p className='mr-5'>
        <span className='text-blue-500 font-semibold'>Team:</span> {club}
      </p>
      <p className='mr-5'>
        <span className='text-blue-500 font-semibold'>Position:</span> {position}
      </p>
      <p className='mr-5'>
        <span className='text-blue-500 font-semibold'>Nationality:</span> {nationality}
      </p>
     
     
    </div>
  );
};

export default Hint;

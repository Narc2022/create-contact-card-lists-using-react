import React from 'react';
import NameAvatar from './NameAvatar';

const Card = ({ title, name }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
      <div className="px-6 py-4 flex">
        <div className='max-w-[30%]'>
        <NameAvatar name={name} />
        </div>
       
        <div className="font-bold text-xl mb-2 max-w-[70%]">{name}</div>
        {/* <p className="text-gray-700 text-base">{title}</p> */}
      </div>
    </div>
  );
};

export default Card;
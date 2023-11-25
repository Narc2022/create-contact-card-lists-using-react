import React from 'react';

const NameAvatar = ({ name }) => {
  const getInitials = (name) => {
    const names = name.split(' ');
    return names
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const randomColor = generateRandomColor();

  return (
    <div className={`flex items-center justify-center min-h-full text-white`} style={{background:randomColor}}>
      {getInitials(name)}
    </div>
  );
};

export default NameAvatar;
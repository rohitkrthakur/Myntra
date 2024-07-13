import React from 'react';

function Dropdown({ content, isVisible }) {
  return (
    <div
      className={`absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <p>{content}</p>
    </div>
  );
}

export default Dropdown;

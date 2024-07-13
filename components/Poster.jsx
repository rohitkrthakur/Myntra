import React from 'react';

function Posters() {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      <img src="/images/mainposter.png" className="w-full h-80 object-cover mb-2" alt="Poster 1" />
      <img src="/images/posterthi.png" className="w-full h-80 object-cover" alt="Poster 2" />
    </div>
  );
}

export default Posters;

import React from 'react';
import './page2.css';

const Page2 = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413')` }}>
      <div className="frosted-glass p-8 w-[90%] max-w-4xl rounded-2xl">
        <h1 className="text-white text-2xl font-bold mb-4">Frosted Glass Effect</h1>
        <input type="text" className="frosted-input mb-4 w-full" placeholder="Enter something..." />
        <button className="frosted-button">Submit</button>
      </div>
    </div>
  );
};

export default Page2;

import React from 'react';

interface HeaderProps {
  userName: string;
}

export const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#FF9898] rounded-full flex items-center justify-center text-white font-cursive">
            v
          </div>
          <span className="ml-2 font-cursive text-xl">Vista Lab</span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img 
            src="https://placehold.co/40x40" 
            alt="User profile picture" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

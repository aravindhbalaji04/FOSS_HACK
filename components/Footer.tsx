import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 py-4 border-t">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#FF9898] rounded-full flex items-center justify-center text-white font-cursive text-sm">
            v
          </div>
          <span className="ml-2 font-cursive">Vista Lab</span>
        </div>
        <div className="text-sm text-gray-600">
          © 2024 Aqeel Shahzad. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">Facebook</span>
            📘
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">LinkedIn</span>
            💼
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">Twitter</span>
            🐦
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">GitHub</span>
            🐱
          </a>
        </div>
      </div>
    </footer>
  );
};

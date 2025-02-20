import React from 'react';

export const Statistics: React.FC = () => {
  return (
    <div className="mt-8 flex gap-4">
      <div className="bg-[#FFE5D1] p-4 rounded-lg">
        <div className="text-3xl font-bold">04</div>
        <div className="text-sm">COMPLETED TASKS</div>
      </div>
      
      <div className="bg-[#C4A49F] p-4 rounded-lg text-white">
        <div className="text-3xl font-bold">15</div>
        <div className="text-sm">PENDING TASKS</div>
      </div>

      <div className="bg-white p-4 rounded-lg flex-1">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm">Tasks created</div>
            <div className="text-3xl font-bold">1,500</div>
          </div>
          <div>
            <div className="text-sm">25+ Active Users</div>
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src={`https://placehold.co/32x32`}
                  alt={`Active user ${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

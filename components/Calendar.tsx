import React, { useState } from 'react';

interface CalendarProps {
  onDateSelect: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const renderCalendarDays = () => {
    const days = [];
    const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    // Render week days
    days.push(
      <div key="weekdays" className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>
    );

    // Render calendar dates
    let cells = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push(<div key={`empty-${i}`} className="h-8" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(
        <div
          key={day}
          onClick={() => onDateSelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
          className={`h-8 flex items-center justify-center cursor-pointer rounded-full
            ${day === currentDate.getDate() ? 'bg-[#FF9898] text-white' : 'hover:bg-gray-100'}`}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {cells}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
      </div>
      {renderCalendarDays()}
    </div>
  );
};

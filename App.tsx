import React, { useState } from 'react';
import { Header } from './components/Header';
import { Calendar } from './components/Calendar';
import { TaskList } from './components/TaskList';
import { Statistics } from './components/Statistics';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen bg-[#F2EAEA]">
      <Header userName="Aqeel" />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-semibold mb-8">
          Hello, Aqeel , <span className="text-gray-500">Start planning today</span>
        </h1>
        
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <Calendar onDateSelect={setSelectedDate} />
          </div>
          
          <div className="col-span-8">
            <TaskList />
          </div>
        </div>

        <Statistics />
      </main>

      <Footer />
    </div>
  );
};

export default App;

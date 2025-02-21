import React, { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  startDate: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
}

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Learn Javascript',
      description: 'Study the basics of JavaScript programming',
      startDate: '07-07-2023',
      category: 'Learning',
      priority: 'high'
    },
    // Add more sample tasks as needed
  ]);

  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 bg-blue-100 rounded-md">Type Top 10 Task</button>
        <button className="px-4 py-2 bg-blue-100 rounded-md">Send My Top Task</button>
      </div>
      
      <div className="flex gap-2 mb-4">
        <select className="px-4 py-2 border rounded-md">
          <option>By category</option>
        </select>
        <select className="px-4 py-2 border rounded-md">
          <option>By priority</option>
        </select>
      </div>

      <div className="grid gap-4">
        {tasks.map(task => (
          <div key={task.id} className="bg-[#FFE5D1] p-4 rounded-lg">
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              Start date: {task.startDate}
            </div>
            <div className="flex gap-2 mt-2">
              <button className="p-1 rounded-full bg-white">
                <span className="sr-only">Edit</span>
                ✏️
              </button>
              <button className="p-1 rounded-full bg-white">
                <span className="sr-only">Delete</span>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 px-4 py-2 border border-orange-300 text-orange-600 rounded-md w-full">
        Load more
      </button>
    </div>
  );
};

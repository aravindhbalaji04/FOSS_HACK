"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Header_1 = require("./components/Header");
var Calendar_1 = require("./components/Calendar");
var TaskList_1 = require("./components/TaskList");
var Statistics_1 = require("./components/Statistics");
var Footer_1 = require("./components/Footer");
var App = function () {
    var _a = (0, react_1.useState)(new Date()), selectedDate = _a[0], setSelectedDate = _a[1];
    return (<div className="min-h-screen bg-[#F2EAEA]">
      <Header_1.Header userName="Aqeel"/>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-semibold mb-8">
          Hello, Aqeel , <span className="text-gray-500">Start planning today</span>
        </h1>
        
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <Calendar_1.Calendar onDateSelect={setSelectedDate}/>
          </div>
          
          <div className="col-span-8">
            <TaskList_1.TaskList />
          </div>
        </div>

        <Statistics_1.Statistics />
      </main>

      <Footer_1.Footer />
    </div>);
};
exports.default = App;

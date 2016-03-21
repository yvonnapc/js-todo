var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son Of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
///<reference path="to-do-classes-interfaces.ts"/>
///<reference path="to-do-people.ts"/>
///<reference path="to-do-create-tasks.ts"/>
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
var ToDoList;
(function (ToDoList) {
    ToDoList.getHomeTasks = function (taskCollection) {
        var homeTasks = [];
        for (var _i = 0, taskCollection_2 = taskCollection; _i < taskCollection_2.length; _i++) {
            var task = taskCollection_2[_i];
            if (task instanceof (ToDoList.HomeTask)) {
                homeTasks.push(task);
            }
        }
        console.log(homeTasks);
        return homeTasks;
    };
})(ToDoList || (ToDoList = {}));
var ToDoList;
(function (ToDoList) {
    ToDoList.getWorkTasks = function (taskCollection) {
        var workTasks = [];
        for (var _i = 0, taskCollection_3 = taskCollection; _i < taskCollection_3.length; _i++) {
            var task = taskCollection_3[_i];
            if (task instanceof ToDoList.WorkTask) {
                workTasks.push(task);
            }
        }
        console.log(workTasks);
        return workTasks;
    };
})(ToDoList || (ToDoList = {}));
var ToDoList;
(function (ToDoList) {
    ToDoList.getHobbyTasks = function (taskCollection) {
        var hobbyTasks = [];
        for (var _i = 0, taskCollection_4 = taskCollection; _i < taskCollection_4.length; _i++) {
            var task = taskCollection_4[_i];
            if (task instanceof ToDoList.HobbyTask) {
                hobbyTasks.push(task);
            }
        }
        console.log(hobbyTasks);
        return hobbyTasks;
    };
})(ToDoList || (ToDoList = {}));
var ToDoList;
(function (ToDoList) {
    ToDoList.getHighPriority = function (taskCollection) {
        var highPriority = [];
        for (var _i = 0, taskCollection_5 = taskCollection; _i < taskCollection_5.length; _i++) {
            var task = taskCollection_5[_i];
            if (task.priority === "High") {
                highPriority.push(task);
            }
        }
        console.log(highPriority);
        return highPriority;
    };
})(ToDoList || (ToDoList = {}));
// $(document).ready(function(){
//
//   var people = [];
//   var tasks = [];
//
//
//   $('#homeTasks').click(function(){
//     for(var task of homeTasks){
//       $('#showHomeTask').append('<p>' + homeTasks + '</p>');
//     }
//   });
//
//
//   $('#hobbyTasks').click()
//   $('#workTasks').click()
// });
// USER-INTERFACE LOGIC FOR ADDING TASKS
// var homeTasks = $('#addHomeTask').val();
// var workTasks = $('#addWorkTask').val();
// var workDescription = $('#workDescription').val();
//
// var hobbyTasks = $('#addHobbyTask').val();
// var hobbyDescription = $('#hobbyDescription').val();
//
// $('#addHomeTask').submit(function(event){
//   event.preventDefault();
//   var home = $('#addHomeTask').val();
//   var homeDescription = $('#homeDescription').val();
//   var homeTask = new ToDoList.HomeTask(description, priority);
//   tasks.push(new ToDoList.HomeTask);
//   $('#showHomeTasks').append('<h3>Home Tasks:</h3><li>' +
//                               homeTask.home + '</li>' +
//                               '<li>' homeTask.homeDescription + '</li>');
//   console.log(homeTask.home);
// });
///<reference path="to-do-classes-interfaces.ts" />
///<reference path="to-do-people.ts"/>
///<reference path="to-do-listing-functions.ts"/>
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do dishes", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate", "low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash laundry", "High"));
tasks[0].markDone();
tasks.push(new ToDoList.HobbyTask("Practice origami"));
tasks.push(new ToDoList.HobbyTask("Bake pie"));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling", "Low", people.loki));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy new shirt", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world", "High", people.thor));
ToDoList.getHomeTasks(tasks);
ToDoList.getWorkTasks(tasks);
ToDoList.getHobbyTasks(tasks);
ToDoList.getHighPriority(tasks);
// console.log(tasks);
// var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
// // console.log("Here are thor's tasks");
// for (var task of thorTasks){
//   console.log(task);
// }

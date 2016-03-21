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


// console.log(tasks);
// var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
// // console.log("Here are thor's tasks");
// for (var task of thorTasks){
//   console.log(task);
// }

class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {}

class HobbyTask extends Task{
  constructor(public description: string){
    super(description, "Low");
  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}
var tasks = [];
tasks.push(new HomeTask("Do the dishes", "High"));
tasks.push(new HomeTask("Buy Chocolate", "Low"));
tasks.push(new HomeTask("Wash Laundry", "High"));

tasks.push(new HobbyTask("Practice origami"));
tasks.push(new HobbyTask("Bake a pie"));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling", "Low"));
// tasks[0].markDone();
console.log(tasks);

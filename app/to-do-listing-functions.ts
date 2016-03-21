///<reference path="to-do-classes-interfaces.ts"/>
///<reference path="to-do-people.ts"/>
///<reference path="to-do-create-tasks.ts"/>
module ToDoList{
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[]{
    var descriptions: String[] = [];
    for (var task of taskCollection){
      if(task.assignedTo === assignee){
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}

module ToDoList{
  export var getHomeTasks = function(taskCollection: Task[]): Task[]{
    var homeTasks = [];
    for (var task of taskCollection){
      if(task instanceof(HomeTask)){
        homeTasks.push(task);
      }
    }
    // console.log(homeTasks);
    return homeTasks;
  }
}

module ToDoList{
  export var getWorkTasks = function(taskCollection: Task[]): Task[]{
    var workTasks = [];
    for (var task of taskCollection){
      if(task instanceof WorkTask){
        workTasks.push(task);
      }
    }
    // console.log(workTasks);
    return workTasks;
  }
}

module ToDoList{
  export var getHobbyTasks = function(taskCollection: Task[]): Task[]{
    var hobbyTasks = [];
    for (var task of taskCollection){
      if (task instanceof HobbyTask){
        hobbyTasks.push(task);
      }
    }
    // console.log(hobbyTasks);
    return hobbyTasks;
  }
}

module ToDoList{
  export var getHighPriority = function(taskCollection: Task[]): Task[]{
    var highPriority = [];
    for(var task of taskCollection){
      if (task.priority === "High"){
        highPriority.push(task);
      }
    }
    // console.log(highPriority);
    return highPriority;
  }
}

module ToDoList{
  export var getMediumPriority = function(taskCollection: Task[]): Task[]{
    var mediumPriority = [];
    for(var task of taskCollection){
      if (task.priority === "Medium"){
        mediumPriority.push(task);
      }
    }
    // console.log(mediumPriority);
    return mediumPriority;
  }
}

module ToDoList{
  export var getLowPriority = function(taskCollection: Task[]): Task[]{
    var lowPriority = [];
    for(var task of taskCollection){
      if (task.priority === "Low"){
        lowPriority.push(task);
      }
    }
    // console.log(lowPriority);
    return lowPriority;
  }
}


$(document).ready(function(){

  // var people = [];
  // var tasks = [];


  $('#homeTasks').click(function(){
    var homeTasks = ToDoList.getHomeTasks(tasks);
    for (task of homeTasks){
      $('#showHomeTasks').append('<p>' + task.description + '</p>');
    }
      console.log(homeTasks);

  });


  // $('#hobbyTasks').click()
  // $('#workTasks').click()
});

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

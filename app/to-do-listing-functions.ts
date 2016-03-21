///<reference path="to-do-classes-interfaces.ts"/>
///<reference path="to-do-people.ts"/>
///<reference path="to-do-listing-functions.ts"/>
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

$(document).ready(function(){

  var people = [];
  var tasks = [];

  // var homeTasks = $('#addHomeTask').val();

  var workTasks = $('#addWorkTask').val();
  var workDescription = $('#workDescription').val();

  var hobbyTasks = $('#addHobbyTask').val();
  var hobbyDescription = $('#hobbyDescription').val();

  $('#addHomeTask').submit(function(event){
    event.preventDefault();
    var home = $('#addHomeTask').val();
    var homeDescription = $('#homeDescription').val();
    var homeTask = new ToDoList.HomeTask(description, priority);
    tasks.push(new ToDoList.HomeTask);
    $('#showHomeTasks').append('<h3>Home Tasks:</h3><li>' +
                                homeTask.home + '</li>' +
                                '<li>' homeTask.homeDescription + '</li>');
    console.log(homeTask.home);
  });




  // $('#homeTasks').click(function(){
  //   for(var task of homeTasks){
  //     $('#showHomeTask').append('<p>' + homeTasks + '</p>');
  //   }
  // });
  //
  //
  // $('#hobbyTasks').click()
  // $('#workTasks').click()
});

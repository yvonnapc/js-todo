$(document).ready(function(){
  // var tasks = module ToDoList
  var homeTasks = new ToDoList.HomeTask(tasks);
  var hobbyTasks = new ToDoList.HobbyTask(tasks);
  var workTasks = new ToDoList.WorkTask(tasks);

  $('#homeTasks').click(function(){
    for(var task of homeTasks){
      $('#showHomeTask').append('<p>' + homeTasks + '</p>');
    }
  });


  $('#hobbyTasks').click()
  $('#workTasks').click()
});


// on Click of #homeTasks,
// append each task identifying as a "HomeTask"

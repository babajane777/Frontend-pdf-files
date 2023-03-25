const tasks = [];

const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
console.log(tasks);
// console.log('Working');

function renderList () {}

function markTaskAsComplete (taskId) {
	const task = tasks.filter(function(task){
		return task.id == taskId
	})

	if(task.length > 0){
		const currenttask = task[0];
		currenttask.done = !currenttask.done;
		renderList();
		showNotification("task toggled successfullly");
		return;
	}

	showNotification("could not toggle the task")
}


function deleteTask (taskId) {
	const newtasks = tasks.filter(function(task){
		return task.id != taskId
	})

	tasks = newtasks;
	renderList();
	showNotification("Task was deleted sucessfully.")
}

function addTask (task) {
	if(task){
		tasks.push(task);
	    renderList();
	    showNotification("Task was added sucessfully.")
	    return;
	}

	showNotification("Empty task cannot be added")

}


function showNotification(text) {
	alert(text);
}


function HandleInput(e){

	if(e.key == "Enter"){
		const text  = e.target.value;

		if(!text){

			showNotification("empty text cannot be added")

			return
		}

		const task = {
			text,
			id : Date.now().toString(),
			done : false
		}

		e.target.value = "";
		addTask(task);


	}

}

addTaskInput.addEventListener('keyup', HandleInput)
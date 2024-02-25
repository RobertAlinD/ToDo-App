const taskForm = document.querySelector(".task-form");
taskForm.addEventListener('submit', onTaskFormSubmit);

function onTaskFormSubmit(event) {
    event.preventDefault();

    const taskList = document.querySelector(".tasks");
    const taskInput = taskForm.querySelector('input');

    if (!taskInput.value) {
        alert('Trebuie sa completezi')
        return;
    }
    const newItemList = document.createElement("li")
    newItemList.innerText = taskInput.value;
    newItemList.classList.add("task")
    newItemList.addEventListener('click', () => {
        newItemList.remove();


    });
    taskList.append(newItemList);
    taskInput.value = "";


}




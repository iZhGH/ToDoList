let projectsParentElement = document.querySelector(".projects");
let addBtn = document.querySelector(".addButton");
// Grab parent element for ToDos (the board)


const projects = (function() {
    let projectList = ["All"];

    function getProjects() {
        return projectList;
    }

    function addProjects(projectName) {
        projectList.push(projectName);
    }



    return {getProjects, addProjects}
})();


class toDo {
    constructor(title, description, dueDate, Priority, includedIn) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.Priority = Priority;
        this.includedIn = ["all"];
    }

}
 
const toDoHandler = (function() {
    let datePattern = /^\d{4}-\d{2}-\d{2}$/;  // Regex to match 'YYYY-MM-DD'
    function addToDo() {
        // Ask a bunch of questions
        let name = prompt("Enter a name for your new task");
        let description = prompt("Give a quick description for your task");
        let dueDate = prompt("Please enter a due date for this task (YYYY-MM-DD");
        console.log(datePattern.test(dueDate));
        while (!datePattern.test(dueDate)) {
            dueDate = prompt("ERROR! --- > Please enter a due date for this task (YYYY-MM-DD");
        }
        let priorty = prompt("What is the priority level for this task? 1 = Urgent, 2 = Moderate, 3 = None");
        while (parseInt(priorty) != 1 && parseInt(priorty) != 2 && parseInt(priorty) != 3) {
            priorty = prompt("ERROR! INVALID INPUT --- > What is the priority level for this task? 1 = Urgent, 2 = Moderate, 3 = None");
        }
        let includedin = prompt("Would you like to add this task to a specific project? If so enter the name of the project. (If it doesn't exist a new one will be created!) If you don't want to, press ENTER, leaving the field blank");
        // Prompt validation

        // Push answers into toDo array as object with K/V's
        // Add new project to projects list (if given)
        // Render ToDo's. render.renderToDo();
    }

 return {addToDo}

})();

const render = (function() {
    
    function renderProjects() {
        let list = projects.getProjects();
        for (let i = 0; i < list.length; i++) {
            let renderedProject = document.createElement("li");
            renderedProject.textContent = `${list[i]}`;
            renderedProject.classList.add("project");
            projectsParentElement.appendChild(renderedProject);
        }

    }

    function renderToDo() {
        // Call list of toDo's
        // Cycle through toDo list
        // Create new toDo HTML element with corresponding textContent
        // Check priority and change to corresponding color
        // Append new ToDo
    }

    return {renderProjects, renderToDo}

})();

//projects.addProjects("Training");
render.renderProjects();
addBtn.addEventListener('click', toDoHandler.addToDo);

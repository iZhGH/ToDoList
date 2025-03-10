let projectsParentElement = document.querySelector(".projects");
let addBtn = document.querySelector(".addButton");
// Grab parent element for ToDos (the board)


// addBtn.addEventListener('click', toDo.addToDo());

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
        this.includedIn = includedIn;
    }
}
 
const toDo = (function() {
    

    function addToDo() {
        // Ask a bunch of questions
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

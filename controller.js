let projectsParentElement = document.querySelector(".projects");
let addBtn = document.querySelector(".addButton");

// addBtn.addEventListener('click', addToDo());

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
 
const toDo = (function() {
    toDoList = [
        {
            "title":"Test Title",
            "description": "Test description",
            "dueDate": "Test Date",
            "Priority": "Immediate",
            "includedIn":  ["All"]
        }

    ]

    function addToDo() {

    }



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

    }

    return {renderProjects, renderToDo}

})();

//projects.addProjects("Training");
render.renderProjects();

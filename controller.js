let projectsParentElement = document.querySelector(".projects");

const projects = (function() {
    let projectList = ["all"];

    function getProjects() {
        return projectList;
    }

    function addProjects(projectName) {
        projectList.push(projectName);
    }



    return {getProjects, addProjects}
})();
 
class toDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

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



    return {renderProjects}

})();

projects.addProjects("Training");
render.renderProjects();

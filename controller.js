const render = (function() {
    function renderProjects() {

    }

    

    return {renderProjects}

})();




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

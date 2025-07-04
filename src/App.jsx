import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import Project from "./components/Project.jsx";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectProject: undefined,
    projectsList: []
  });

  let content = undefined;
  const selectedProjectObject = projectsState.projectsList.find(
    project => project.title === projectsState.selectProject
  );

  function handleAddProject() {
    setProjectsState(currentState => {
      return {
        ...currentState,
        selectProject: null
      }
    });
  }

  function handleCancelButton() {
    setProjectsState(currentState => {
      return {
        ...currentState,
        selectProject: undefined
      }
    });
  }

  function handleSaveButton(enteredTitle, enteredDescription, enteredDueDate) {
    setProjectsState(currentState => {
      return {
        selectProject: undefined,
        projectsList: [
          ...currentState.projectsList,
          {
            id: Date.now(),
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
            tasksList: []
          }
        ]
      }
    });
  }

  function handleClickOnProject(selectedTitle) {
    setProjectsState(currentState => {
      return {
        selectProject: selectedTitle,
        projectsList: currentState.projectsList
      }
    })
  }

  function handleAddTask(newTask) {
    const index = (projectsState.projectsList).findIndex(projects => projects.title === projectsState.selectProject);
    const projectToAddTask = projectsState.projectsList[index];
    projectsState.projectsList[index] = {
      id: projectToAddTask.id,
      title: projectToAddTask.title,
      description: projectToAddTask.description,
      dueDate: projectToAddTask.dueDate,
      tasksList: [
        ...projectToAddTask.tasksList,
        newTask
      ]
    }
    setProjectsState(currentState => {
      return {
        selectProject: currentState.selectProject,
        projectsList: currentState.projectsList
      }
    });
  }

  function handleRemoveTask(taskName) {
    const index = (projectsState.projectsList).findIndex(projects => projects.title === projectsState.selectProject);
    const projectToRemoveTask = projectsState.projectsList[index];
    const updatedTasks = projectToRemoveTask.tasksList.filter((_, idx) => idx !== taskName);
    projectsState.projectsList[index] = {
      id: projectToRemoveTask.id,
      title: projectToRemoveTask.title,
      description: projectToRemoveTask.description,
      dueDate: projectToRemoveTask.dueDate,
      tasksList: [
        ...updatedTasks
      ]
    }
    setProjectsState(currentState => {
      return {
        selectProject: currentState.selectProject,
        projectsList: currentState.projectsList
      }
    });
  }

  function handleDeleteProject(projectId) {
    const updatedProjects = (projectsState.projectsList).filter((projectsInList) => projectsInList.id !== projectId);
    setProjectsState(currentState => {
      return {
        selectProject: undefined,
        projectsList: [...updatedProjects]
      }
    })
  }

  if (projectsState.selectProject === undefined) {
    content = <SplashScreen onClickHandler={handleAddProject} />;
  } else if (projectsState.selectProject === null) {
    content = <NewProject cancelHandler={handleCancelButton} saveHandler={handleSaveButton} />;
  } else {
    content = <Project contentObject={selectedProjectObject} addTaskHandler={handleAddTask}
      cancelTaskHandler={handleRemoveTask} deleteProjectHandler={handleDeleteProject} />;
  }

  return (
    <>
      <main className="h-screen flex gap-8">
        <SideBar onClickHandler={handleAddProject} projects={projectsState.projectsList} onClickProjectHandler={handleClickOnProject} />
        {content}
      </main>
    </>
  );
}

export default App;

import { collatedTasks } from "../constants";

export const getCollatedTasksExist = selectedProject => {
  return collatedTasks.find(task => task.key === selectedProject);
};

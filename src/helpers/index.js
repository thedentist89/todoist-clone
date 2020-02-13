import { collatedTasks } from "../constants";

export const collatedTasksExist = selectedProject => {
  return collatedTasks.find(task => task.key === selectedProject);
};

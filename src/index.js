import React from "react";
import { render } from "react-dom";
import { ProjectsProvider, SelectedProjectsProvider } from "./context";
import App from "./App";

render(
  <SelectedProjectsProvider>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </SelectedProjectsProvider>,
  document.getElementById("root")
);

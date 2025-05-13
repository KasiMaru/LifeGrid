## LifeGrid

**Project Goal:** Develop an interactive web application visualizing a person's life in weeks, combined with a mastery hours calculator and a dopamine spikes graph.

**Timeline:** 12 days

**Tech Stack:**

*   **Frontend:** React (TypeScript), RxJS, Vite, SCSS, Framer Motion (for animations), D3 (for graphs), Temporal JS (for date/time manipulation)
*   **DevOps:** Docker

**Milestones:**

**Milestone 1: Project Setup and Core Components (Day 1-2)**

*   **Tasks:**
    *   Set up the development environment: Initialize a new project using Vite with React and TypeScript.
    *   Install necessary dependencies: `react`, `typescript`, `rxjs`, `vite`, `sass`, `framer-motion`, `temporal-js`, other necessary packages.
    *   Create core components:
        *   `LifeCalendar`: Component to render the grid of weeks.
        *   `MasteryCalculator`: Component for the mastery hours calculation.
        *   `App` component to manage routing and state.
    *   Implement basic styling: Set up SCSS and create basic styles for the components.
*   **Deliverables:**
    *   Functional project setup with core components rendered.
    *   Basic styling implemented.

**Milestone 2: Life Calendar Implementation (Day 3-4)**

*   **Tasks:**
    *   Implement user input for date of birth and optional end date.
    *   Use Temporal JS to calculate the total number of weeks and render the `LifeCalendar` grid.
    *   Implement color-coding for weeks (e.g., by decade or user-defined categories).
    *   Implement basic hover effects to display week details.
    *   Integrate RxJS for any dynamic updates (e.g., highlighting the current week).
*   **Deliverables:**
    *   Fully functional `LifeCalendar` component with user input, dynamic rendering, and basic interactivity.

**Milestone 3: Mastery Calculator Implementation (Day 5-6)**

*   **Tasks:**
    *   Implement user input for current skill level, target skill level, and hours/week dedicated to learning.
    *   Use Temporal JS to calculate the remaining time to mastery.
    *   Implement a progress bar and/or flow field animation using Framer Motion and RxJS to visualize progress.
    *   Display the estimated completion date, dynamically updated using RxJS and Temporal JS.
*   **Deliverables:**
    *   Fully functional `MasteryCalculator` component with interactive inputs, progress visualization, and dynamic updates.

**Milestone 4: Dopamine spikes graph implementation (Day 7-10)**

*   **Tasks:**
    *   Implement interactive graph that displays baseline dopamine spikes for different addictions (social media, porn, sweets etc).
    *   Make graph on the left side of the viewport, controls in the right side.
    *   Use D3 lib for graphs / charts, make it use animations for graph transitions.
*   **Deliverables:**
    *   Fully functional `DopamineGraph` component with interactive selection of different dopaminergic activities


**Milestone 5: Polish, Testing, and Deployment (Day 11 - 12)**

*   **Tasks:**
    *   Refine styling and animations for both components.
    *   Add responsive design for different screen sizes.
    *   Write basic unit tests for core functionalities.
    *   Set up Docker for containerization.
    *   Deploy the application (e.g., using Netlify, Vercel, or a similar platform).
    *   Review and optimize the application's performance.
*   **Deliverables:**
    *   Polished and tested web application.
    *   Deployed application.
    *   Dockerized application.

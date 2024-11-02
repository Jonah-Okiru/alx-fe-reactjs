# Fundamentals and Core Concepts of React
This project is designed to introduce you to the essential elements of React, a popular JavaScript library for building user interfaces. It aims to provide a solid foundation by guiding you through building and modifying basic React applications and components.

## Objectives:
- Understand the basics of React and its benefits.
- Learn how to set up a new React application.
- Grasp the roles of ReactDOM and JSX.
- Create and manage functional React components.
- Understand the component lifecycle and state/props management.
- Build React applications from scratch using create-react-app.
- Modify and customize pre-built React components.
- Pass data between components using props.
- Integrate multiple components into a single application.

## Tasks:
### 1. Create Your First React App.
- Create a new repository named alx-fe-reactjs on GitHub.
- Clone the repository and navigate to it using cd.
- Run the command: npm create vite@latest alx-react-app -- --template   react (replace alx-react-app with your desired app name).
- Install dependencies: cd alx-react-app && npm install
- Start the development server: npm run dev
- Open http://localhost:5173 in your browser to view the app.

### 2. Modify JSX in a Pre-built React Component.

- Create a file named WelcomeMessage.jsx under src/components.
- Modify it's h1 tage text to "Hello everyone, I am learning React at ALX!".
- Add a new paragraph with the text "I am learning about JSX!".
- Integrate the component into App.jsx:
- Import the component: import WelcomeMessage from './WelcomeMessage'
- Include <WelcomeMessage /> within the App function's return statement.
- Run npm run dev and observe the changes in the browser.

### 3. Create Specific Components in a React Application.

### Create three functional components:
- Header.jsx: Returns <header><h1>My Favorite Cities h1 header. tag
- MainContent.jsx: Returns <main><p>I love to visit New York, Paris,  and Tokyo.</p></main>.
- Footer.jsx: Returns <footer><p>© 2023 City Lovers</p></footer>.
- Import the components into App.jsx:
- import Header from './Header';
- import MainContent from './MainContent';
- import Footer from './Footer';
- Render the components in order within App.jsx's return statement:
- Run npm run dev and ensure all components are displayed correctly.

### 4.Create a User Profile Card Using Props 

- Create a file named UserProfile.jsx under src/components.
- Define a functional component UserProfile that takes props for name, age, and bio.
- Use JSX elements (h2, p) to display user information received through props.
- Define the props structure in the component.
- Import UserProfile into App.jsx.
- Use the component with props, for example:
- JavaScript

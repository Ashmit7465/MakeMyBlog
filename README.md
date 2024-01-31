# MakeMyBlog - React JS + Appwrite Blog App

MakeMyBlog is a React JS application that serves as a simple blog app. It utilizes the authentication service, database, and bucket service from Appwrite. The app incorporates features like real-time editing using TinyMCE, React Router for navigation, React Hook Form for form handling, Redux Toolkit and React-Redux for state management, and Tailwind CSS for styling.

## Features

- User authentication and signup using Appwrite.
- Users can only edit the posts they have added and can only read others' posts.
- Real-time post editing with the TinyMCE real-time editor.

## Getting Started

Follow the steps below to download and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MakeMyBlog.git
   cd MakeMyBlog


2. Install dependencies
    ```bash
    npm install

3. Create an .env file at the root of the project and add your Appwrite API endpoint and project details
```bash
REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-endpoint/api
REACT_APP_APPWRITE_PROJECT_ID=your-appwrite-project-id
REACT_APP_APPWRITE_API_KEY=your-appwrite-api-key


4. ```bash
   npm run dev

5. Open your browser and navigate to localhost view the app

## User Authentication and Authorization

-Users can sign up and log in using Appwrite authentication.
-Each user can only edit and delete the posts they have added.
-Users can read posts created by others.

## Dependencies

-React
-React Router
-React Hook Form
-Redux Toolkit
-React-Redux
-TinyMCE
-Tailwind CSS

## Project Structure

The project is organized into components, each handling a specific part of the application. The structure is as follows:

- `/src/components`: Contains individual components.
- `/src/pages`: Defines different pages of the application.
- `/src/redux`: Manages Redux store setup and slices.

## Contribution

Feel free to contribute to the project by creating issues or pull requests. Your contributions are highly appreciated!

## Author

Ashmit Shukla

## Acknowledgements

- Appwrite - For providing authentication, database, and bucket services.
- React - A JavaScript library for building user interfaces.
- Tailwind CSS - A utility-first CSS framework.
- Redux Toolkit - The official, opinionated, batteries-included toolset for efficient Redux development.
- TinyMCE - A rich-text editing platform.


Make sure to replace the placeholders such as `your-username`, `your-appwrite-endpoint`, `your-appwrite-project-id`, `your-appwrite-api-key`, and `[Your Name]` with the appropriate information. Also, ensure that your Appwrite backend is configured to handle user authentication and authorization based on the described features.

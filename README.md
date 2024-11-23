1. Set Up the Project
Clone the repository and install dependencies:

1) git clone <repository-url>
2) cd <project-directory>
3) npm install

2. Run the Application
Start the development server:

npm run dev
The app will be available at http://localhost:5173.

Assumptions & Design Decisions

1) Component-Based Architecture: Key components like ConfigForm (settings input) and ChatPreview (live preview).
2) State Management: Uses React’s useState for managing configurations.
3) Styling: Tailwind CSS for responsive, utility-first styling.
 Color & Image Configurations: Editable hex inputs and file upload for images.

Known Issues

1) Some responsiveness improvements needed for very small/large screens.

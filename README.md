**1.** Set Up the Project

   install dependencies: 
```bash
npm install
```
**2.** Run the Application

   Start the development server:
   ```bash
   npm run dev 
   ```
   The app will be available at http://localhost:5173.

**3** Assumptions & Design Decisions

1) Component-Based Architecture: Key components like ConfigForm (settings input) and ChatPreview (live preview).
2) State Management: Uses React’s useState for managing configurations.
3) Styling: Tailwind CSS for responsive, utility-first styling.
4)Color & Image Configurations: file upload for images but the color code hex inputs are not editable , you have to select it from the sketch-picker.

**4** Known Issues

1) Some responsiveness improvements needed for very small/large screens.

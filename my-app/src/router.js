// Import createBrowserRouter from React Router DOM to configure routing
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

// Define and export the application's router configuration
const router = createBrowserRouter([
    {
        path: "/",
        children: [
          {
            // Default route for the root path, renders HomePage component
            index: true,
            element: <HomePage />,
          },
          {
            // Future dynamic route for individual books, using the book name as a parameter
            // path: ":name",
            // element: <Book />,
          },
        ],
    },
]);

export default router;

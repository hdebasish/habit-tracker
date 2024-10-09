// Import necessary modules and components from React Router and other files
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Habits from './pages/Habits/Habits';
import Weekly from './pages/Weekly/Weekly';

function App() {

  // Define the router with routes and nested routes
  const router = createBrowserRouter([
    {
      // Define the root path and assign Navbar as the root element
      path: '/',
      element: <Navbar />,
      children: [
        {
          // Nested route for the root path, displaying the Habits component
          path: '/',
          element: <Habits />
        },
        {
          // Nested route for '/weekly' path, displaying the Weekly component
          path: '/weekly',
          element: <Weekly />
        }
      ]
    }
  ]);

  return (
    <>
      {/* Render the router within the RouterProvider */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

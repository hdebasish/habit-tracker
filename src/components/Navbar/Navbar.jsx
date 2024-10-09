// Import necessary components from react-router-dom for navigation and routing
import { Link, NavLink, Outlet } from "react-router-dom";


// Define the Navbar component
export default function Navbar() {

    // Define a style object for the active navigation link
    const navbarStyle = {
        color: "white",
    }

    return (
        <>
            {/* Navbar container with styling and Bootstrap classes */}
            <nav class="navbar navbar-expand-lg mb-3" style={{ backgroundColor: '#008081' }} data-bs-theme="dark">
                <div class="container-fluid">
                    {/* Link to the home page with a brand name */}
                    <Link class="navbar-brand fw-bold" to="/">HabitTracker</Link>
                    
                    <div>
                        {/* Unordered list for navigation links */}
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                {/* NavLink to the home page with conditional styling when active */}
                                <NavLink className="nav-link" style={({ isActive }) => (isActive ? navbarStyle : undefined)} to="/" >
                                    My Habits
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                {/* NavLink to the Weekly View page with conditional styling when active */}
                                <NavLink className="nav-link" style={({ isActive }) => (isActive ? navbarStyle : undefined)} to="/weekly" >
                                    Weekly View
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            {/* Outlet component for rendering nested routes within the Navbar layout */}
            <div className='container'>
                <Outlet />
            </div>
        </>
    );
}

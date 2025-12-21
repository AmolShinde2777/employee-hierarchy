import { NavLink } from "react-router-dom"

const linkClass = "px-4 rounded text-sm font-medium transition-colors"

export default function Navbar() {
    return (
        <nav className="bg-white shadow px-6 py-3 flex gap-4">
            <NavLink
                to="/employees"
                className = {({ isActive }) =>
                    `${linkClass} ${
                        isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`
                }
            >
              Employee List  
            </NavLink>
            <NavLink
                to="/hierarchy"
                className = {({isActive}) =>
                    `${linkClass} ${
                        isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`
                }
            >
              Hierarchy View  
            </NavLink>
        </nav>
    )
}
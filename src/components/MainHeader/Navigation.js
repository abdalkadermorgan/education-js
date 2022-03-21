import { ReactChild, ReactFragment, ReactPortal, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
    const ctx = useContext(AuthContext)
    return (
        <>
            <nav className="hidden md:flex space-x-10">
                <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home Page</Link>
                <Link to="/Courses" className="text-base font-medium text-gray-500 hover:text-gray-900">Courses</Link>
                {ctx.isLoggedIn && (
                    <Link to="/Dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">Dashboard</Link>
                )}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {!ctx.isLoggedIn && (
                    <Link to="/Login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </Link>
                )}
                {ctx.isLoggedIn && (
                    <button onClick={ctx.onLogout} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Logout </button>
                )}
            </div>
        </>
    )
}

export default Navigation;
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="font-bold text-lg">Mini Issues Board</h1>
            <div className="flex gap-4">
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/issues">Issues</Link>
            </div>
        </nav>
    );
}

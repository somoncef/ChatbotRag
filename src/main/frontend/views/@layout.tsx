import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to='/'
                                className={({ isActive }) => `
                                    px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                                    ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }
                                `}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/chat'
                                className={({ isActive }) => `
                                    px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                                    ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }
                                `}
                            >
                                Chat
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
}
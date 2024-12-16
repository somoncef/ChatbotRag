import {NavLink, Outlet} from "react-router-dom";

export default function Layout(){
    return (
        <div className="p-5">
            <nav>
                <NavLink to='/' className="bg-blue-500 rounded-md p-2 m-3 hover:bg-blue-400">Home</NavLink>
                <NavLink to='/chat' className="bg-blue-500 rounded-md p-2 m-3 hover:bg-blue-400">Chat</NavLink>
            </nav>
            <main>
                <Outlet>

                </Outlet>
            </main>
        </div>
    );
}
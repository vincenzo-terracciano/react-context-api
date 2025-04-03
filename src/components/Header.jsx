import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav
                    className="navbar navbar-expand-sm bg-info">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="/vite.svg" alt="" />
                        </a>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/chisiamo">Chi siamo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/posts">Posts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}
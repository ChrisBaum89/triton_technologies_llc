
export default function NavBar() {
    return (
        <div className="top-nav">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CRB Consulting</a>
                    <ul className="navbar-nav me-right mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
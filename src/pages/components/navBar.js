
export default function NavBar() {
    return (
        <div className="top-nav">
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CRB Consulting</a>
                    <ul className="navbar-nav me-right mb-0 mb-l-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <div className="link-text">
                                    About
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <div className="link-text">
                                    Contact
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
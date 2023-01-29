
import Image from "next/image"

export default function NavBar(props) {
    return (
        <div className="top-nav">
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <Image src={props.logo} className="card-img-top" alt="..." style={{ height: "2rem", width: "auto" }} />
                    </a>
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
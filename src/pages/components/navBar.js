
import Image from "next/image"
import About from "./about"
import Contact from "./contact"

export default function NavBar(props) {
    return (
        <div className="top-nav">
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <Image src={props.logo} className="card-img-top" alt="..." style={{ height: "2rem", width: "auto" }} />
                    </a>
                    <ul className="navbar-nav me-right mb-0 mb-l-0">
                        <li key={1} className="nav-item">
                            <a className="nav-link active" data-bs-toggle="offcanvas" href="#offcanvas1" role="button" aria-controls="offcanvasExample1">
                                <div className="link-text">
                                    About
                                </div>
                            </a>
                        </li>
                        <li key={2} className="nav-item">
                            <a className="nav-link active" data-bs-toggle="offcanvas" href="#offcanvas2" role="button" aria-controls="offcanvasExample2">
                                <div className="link-text">
                                    Contact
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                <About />
                <Contact />
            </div>
        </div>
    )
}
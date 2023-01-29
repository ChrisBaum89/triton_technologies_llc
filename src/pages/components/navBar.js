
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
                            <a className="nav-link active" data-bs-toggle="offcanvas" href="#offcanvasExample1" role="button" aria-controls="offcanvasExample1">
                                <div className="link-text">
                                    About
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="offcanvas" href="#offcanvasExample2" role="button" aria-controls="offcanvasExample2">
                                <div className="link-text">
                                    Contact
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasLabel">About</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        CRB Consulting LLC was founded in 2022 by Chris Baum.
                        Working in the pharmaceuticala and medical device industry for over a decade as an integrator
                        and contract manufacturer, Chris has had a significant amount of experience supporting, upgrading, designing
                        , and procuring automated manufacturing equipment with extensive experience in machine vision.
                    </div>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasLabel">Contact</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        Need to add contact form
                    </div>
                </div>
            </div>
        </div>
    )
}
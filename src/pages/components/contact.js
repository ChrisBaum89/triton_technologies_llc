export default function Contact() {
    return (
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">Contact</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form>
                    <div class="mb-3">
                        <div className="about-form-line">
                            <label class="about-label" for="first-name">First Name</label>
                            <input className="about-input" type="text" id="first-name" name="first-name"></input>
                        </div>
                        <div className="about-form-line">
                            <label class="about-label" for="last-name">Last Name</label>
                            <input className="about-input" type="text" id="last-name" name="last-name"></input>
                        </div>
                        <div className="about-form-line">
                            <label class="about-label" for="email">Email</label>
                            <input className="about-input" type="text" id="email" name="email"></input>
                        </div>
                        <div className="about-form-line">
                            <label class="about-label" for="company">Company</label>
                            <input className="about-input" type="text" id="company" name="company"></input>
                        </div>

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
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
                        <div className="contact-form-line">
                            <label class="contact-label" for="first-name">First Name</label>
                            <input className="contact-input" type="text" id="first-name" name="first-name"></input>
                        </div>
                        <div className="contact-form-line">
                            <label class="contact-label" for="last-name">Last Name</label>
                            <input className="contact-input" type="text" id="last-name" name="last-name"></input>
                        </div>
                        <div className="contact-form-line">
                            <label class="contact-label" for="email">Email</label>
                            <input className="contact-input" type="text" id="email" name="email"></input>
                        </div>
                        <div className="contact-form-line">
                            <label class="contact-label" for="company">Company</label>
                            <input className="contact-input" type="text" id="company" name="company"></input>
                        </div>
                        <div class="contact-message-line">
                            <textarea class="contact-message" id="message" name="contact-message" rows="8" cols="30" placeholder="message+--"></textarea>
                        </div>

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
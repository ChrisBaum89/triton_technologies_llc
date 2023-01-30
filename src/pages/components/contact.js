export default function Contact() {
    return (
        <div className="offcanvas offcanvas-end offcanvas-size-xl" tabindex="-1" id="offcanvas2" aria-labelledby="offcanvas2Label">
            <div className="offcanvas-header">
                <h1 className="offcanvas-title" id="offcanvasLabel">Contact</h1>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form>
                    <div class="mb-3">
                        <div>
                            Email:  <a href = "mailto: crbconsultingsc@gmail.com">crbaumconsultingsc@gmail.com</a>
                        </div>
                        <div>
                            Phone Number: 704-604-6450
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
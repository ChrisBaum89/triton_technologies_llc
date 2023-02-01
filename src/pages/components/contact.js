export default function Contact() {
    return (
        <div className="offcanvas offcanvas-end offcanvas-size-xl" tabIndex="-1" id="offcanvas2" aria-labelledby="offcanvas2Label">
            <div className="offcanvas-header">
                <h1 className="offcanvas-title" id="offcanvasLabel">CONTACT</h1>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form>
                    <div className="mb-3">
                        <div>
                            Email:  <a href = "mailto: crbconsultingsc@gmail.com">tritontechnologiessc@gmail.com</a>
                        </div>
                        <br></br>
                        <div>
                            Phone: 704-604-6450
                        </div>
                        <br></br>
                        <div>
                            Triton Technologies is located in Fort Mill, SC and is currently provided
                            service in the Charlotte and Upstate SC area.
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
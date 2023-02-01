export default function SystemTesting() {
    return (
        // modal is called by the id string
        <div className="modal fade" id="categoryModal5" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">System Qualification</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="category-summary">
                            We have over a decade of experience developing and executing equipment validation and qualification protocols. With experience
                            in regulated industries (Pharma and Medical Device), we can develop the protocol to your needs and requirements or assist
                            with the execution of a protocol.
                        </div>
                        <div className="category-list">
                            <ul>
                                <li>Installation Qualifications (IQs)</li>
                                <li>Operational Qualifications (OQs)</li>
                                <li>Performance Qualifications (PQs)</li>
                                <li>Software Validations (SVs)</li>
                                <li>Factory Acceptance Testing (FATs)</li>
                                <li>Site Acceptance Testing (SATs)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
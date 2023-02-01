export default function SystemTesting() {
    return (
        // modal is called by the id string
        <div className="modal fade" id="categoryModal5" tabIndex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">System Qualification</h1>
                    </div>
                    <div className="modal-body">
                        <div className="category-summary">
                            <p>
                                Industrial system qualification refers to the process of evaluating and verifying that a system meets
                                the required specifications and standards for use in an industrial environment. This process typically
                                involves a series of tests, inspections, and documentation reviews to ensure that the system meets the
                                required functional, performance, safety, and regulatory requirements.
                            </p>
                            <p>
                                With over a decade of experience in the Pharmaceutical and Medical Device industry we are experts at
                                developing and executing validation protocols and testing.
                            </p>
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
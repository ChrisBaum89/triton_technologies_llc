export default function SystemTesting() {
    return (
        // modal is called by the id string
        <div className="modal fade" id="categoryModal5" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">System Testing & Validation</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            <li>Installation Qualification (IQ)</li>
                            <li>Operation Qualification (OQ)</li>
                            <li>Performance Qualification (PQ)</li>
                            <li>Software Validation (SV)</li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function HumanMachineInterfaces() {
    return (
        // modal is called by the id string
        <div className="modal fade" id="categoryModal4" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">Human Machine Interfaces</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="category-summary">
                            add summary
                        </div>
                        <div className="category-list">
                            <ul>
                                <li>Allen-Bradley HMIs</li>
                                <li>AutomationDirect HMIs</li>
                                <li>Keyence HMIs</li>
                                <li>Proface HMIs</li>
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
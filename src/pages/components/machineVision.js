export default function MachineVision() {
    // modal is called by the id string
    return (
        <div className="modal fade" id="categoryModal2" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">Machine Vision</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="category-summary">
                            Expert in implementing defect and part presence machine vision detection
                             and integrating vision sensors into existing systems.
                        </div>
                        <div className="category-list">
                            <ul>
                                <li>Cognex</li>
                                <li>Doss Visual Inspection Equipement</li>
                                <li>Keyence</li>
                                <li>Teledyne Dalsa</li>
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
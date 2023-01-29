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
                        <ul>
                            <li>Keyence</li>
                            <li>Cognex</li>
                            <li>Teledyne Dalsa</li>
                            <li>Datalogicx</li>
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
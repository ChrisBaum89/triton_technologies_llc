export default function MachineControl() {
    return (
        // modal is called by the id string
        <div className="modal fade" id="categoryModal1" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">Machine Control</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        machine control
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function EquipmentDesign() {
    return (
        // modal is called by the id string
        <div className="modal fade" id="categoryModal6" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">Equipment Design & Procurement</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="category-summary">
                            Successfully procured and helped design over 20 pieces of automated equipment, using various machine builders to develop and deliver custom automed equipment.
                        </div>
                        <div className="category-list">
                            <ul>
                                <li>Quoting</li>
                                <li>Develop & Implement User Requirements</li>
                                <li>Timeline Development & Management</li>
                                <li>Develop Operating Procedures</li>
                                <li>Equipment & Procedure Training</li>
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
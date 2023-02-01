export default function MachineVision() {
    // modal is called by the id string
    return (
        <div className="modal fade" id="categoryModal2" tabIndex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">Machine Vision</h1>
                    </div>
                    <div className="modal-body">
                    <div className="category-summary">
                    <p>Industrial machine vision refers to the use of cameras and image processing algorithms to inspect, identify and categorize parts, 
                    products or defects in real-time during the manufacturing process. It helps improve quality control and increase efficiency by 
                    automating visual inspection tasks, detecting defects or deviations from specifications, and guiding robots or other machines 
                    to make necessary adjustments. This technology can also be used to identify and track products through the production line, 
                    monitor production progress and gather data for analysis and continuous improvement.
                    </p>
                    <p>
                        Machine vision is one of our passions as we know the impact it can have to Production, Quality, and a companies bottom line! 
                        We have significant experience with surface inspections, part/feature presence, and dimensional inspections.
                    </p>
                        </div>
                        <div className="category-list">
                            <ul>
                                <li>Cognex</li>
                                <li>Doss Visual Inspection</li>
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
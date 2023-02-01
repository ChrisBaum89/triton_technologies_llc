export default function MachineControl() {
    return (
        // modal is called by the id string
        <div className="modal fade" id="categoryModal1" tabIndex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="categoryModalLabel">Machine Control</h1>
                    </div>
                    <div className="modal-body">
                        <div className="category-summary">
                        <p>Industrial machine control refers to the control and monitoring of various machines used in 
                        industrial processes. It helps improve efficiency, reliability, and safety by automating repetitive 
                        tasks, detecting and diagnosing malfunctions, and allowing for remote monitoring and control. By 
                        automating these processes, industrial machine control can lead to increased production speed and reduced downtime, 
                        lower costs and improved overall quality of the final product. 
                        </p>
                        <p>
                            We have extensive experience with optimizing and improving machine controls along with implementing data collection systems
                            that will provide feed-back to the decision makers at your facility.
                        </p>
                        </div>
                        <div className="category-list">
                            <ul>
                                <li>Programmable Logic Controllers (PLCs)</li>
                                <li>Human Machine Interfaces (HMIs)</li>
                                <li>Industrial Robotics</li>
                                <li>Data Collection</li>
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
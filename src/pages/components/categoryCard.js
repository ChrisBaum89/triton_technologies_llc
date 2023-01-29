import Image from "next/image"
import Link from "next/link"
import EquipmentDesign from "./equipmentDesign"
import HumanMachineInterfaces from "./humanMachineInterfaces"
import MachineControl from "./machineControl"
import MachineVision from "./machineVision"
import Robotics from "./robotics"
import SystemTesting from "./systemTesting"

export default function CategoryCard(props) {
    return (
        <div className="card text-center">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={props.modal}>
            <div className="card-image">
                <Image src={props.image} className="card-img-top" alt="..." style={{ height: "12rem", width: "auto" }} />
            </div>
            <div className="card-body">
                <div className="card-title">{props.title}</div>
            </div>
            </button>

            <MachineControl />
            <MachineVision />
            <Robotics />
            <HumanMachineInterfaces />
            <SystemTesting />
            <EquipmentDesign />
        </div>
    )
}
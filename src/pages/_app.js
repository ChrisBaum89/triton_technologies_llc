import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/app.css'
import '@/styles/categoryCard.css'
import '@/styles/navBar.css'
import '@/styles/offcanvas.css'
import '@/styles/categoryModal.css'
import { useEffect } from 'react';
import MachineVisionImage from '@/images/machine-vision.png'
import RobotImage from '@/images/robot.png'
import HmiImage from '@/images/human-machine-interface.png'
import ValImage from '@/images/validation.png'
import MachineControlImage from '@/images/machine-control.png'
import LogoImage from '@/images/crb-consulting.png'
import ProjectImage from '@/images/project-management.png'
import CategoryCard from './components/categoryCard';
import NavBar from './components/navBar';

export default function App() {
  // Bootstrap uses some only client-side objects (window, document) to handle events. On the other hand, Next.js 
  // renders the app on both the server side and the client side. To avoid the mentioned errors, we have to make 
  //sure that the window and document objects only be used on the client side. That can be done with the useEffect hook
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <div className="app-main">
      <NavBar logo={LogoImage}/>
      <div className="summary">
        Over a decade of experience in machine control, machine vision, and system qualification.
      </div>
      <div className="category-cards">
        <div className="row">
          {/*  Machine Control, Machine Vision, Human Machine Interfaces, Robotics, Qualification and Validation */}
          <div className="col-sm">
            <CategoryCard image={MachineControlImage} title="Machine Control" modal={"#categoryModal1"}/>
          </div>
          <div className="col-sm">
            <CategoryCard image={MachineVisionImage} title="Machine Vision" modal={"#categoryModal2"}/>
          </div>
          <div className="col-sm">
            <CategoryCard image={RobotImage} title="Robotics" modal={"#categoryModal3"}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <CategoryCard image={HmiImage} title="Human Machine Interfaces" modal={"#categoryModal4"}/>
          </div>
          <div className="col-sm">
            <CategoryCard image={ValImage} title="System Testing and Validation" modal={"#categoryModal5"}/>
          </div>
          <div className="col-sm">
            <CategoryCard image={ProjectImage} title="Equipment Design & Procurement" modal={"#categoryModal6"}/>
          </div>
        </div>
      </div >
      <div className="bottom-space"></div>
    </div >
  )
}

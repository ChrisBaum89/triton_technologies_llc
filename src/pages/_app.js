import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/app.css'
import '@/styles/categoryCard.css'
import '@/styles/navBar.css'
import { useEffect } from 'react';
import MachineVisionImage from '@/images/machine-vision.png'
import RobotImage from '@/images/robot.png'
import HmiImage from '@/images/human-machine-interface.png'
import ValImage from '@/images/validation.png'
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
      <NavBar />
      <div className="summary">
        With over a decade of experience in machine control and automation, CRB Consulting can provide expert service.
      </div>
      <div className="category-cards">
        <div className="row">
          {/*  Machine Control, Machine Vision, Human Machine Interfaces, Robotics, Qualification and Validation */}
          <div className="col-sm">
            <CategoryCard image={MachineVisionImage} title="Machine Control" />
          </div>
          <div className="col-sm">
            <CategoryCard image={MachineVisionImage} title="Machine Vision" />
          </div>
          <div className="col-sm">
            <CategoryCard image={RobotImage} title="Robotics" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <CategoryCard image={HmiImage} title="Human Machine Interfaces" />
          </div>
          <div className="col-sm">
            <CategoryCard image={ValImage} title="System Testing and Validation" />
          </div>
        </div>
      </div >
      <div className="bottom-space"></div>
    </div >
  )
}

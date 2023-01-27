import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/app.css'
import '@/styles/categoryCard.css'
import { useEffect } from 'react';
import MachineVisionImage from '@/images/machine-vision.png'
import RobotImage from '@/images/robot.png'
import CategoryCard from './components/categoryCard';

export default function App() {
  // Bootstrap uses some only client-side objects (window, document) to handle events. On the other hand, Next.js 
  // renders the app on both the server side and the client side. To avoid the mentioned errors, we have to make 
  //sure that the window and document objects only be used on the client side. That can be done with the useEffect hook
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <div className="app-main">
      <div className="nav-bar">

      </div>
      <div className="company-logo">
        CRB Consulting
      </div>
      <div className="category-cards">
        {/*  Machine Control, Machine Vision, Human Machine Interfaces, Robotics, Qualification and Validation */}
        <CategoryCard image={MachineVisionImage} title="Machine Vision"/>
        <CategoryCard image={RobotImage} title="Robotics"/>
      </div>
    </div>
  )
}

import '@/styles/globals.css'
import Image from 'next/image'

export default function App() {


  return (
    <div>
      <div className="logo">
        CRB Consulting
      </div>
      <div className="category-cards">
        <div className="card">
          Machine Control
        </div>
        <div className="card">
          Machine Vision
        </div>
        <div className="card">
          System Qualification and Validation
        </div>
      </div>
    </div>
  )
}

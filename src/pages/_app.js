import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import {useEffect} from 'react';

export default function App() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <div className="app-main">
      <div className="company-logo">
        CRB Consulting
      </div>
      <div className="category-cards">
        
      </div>
    </div>
  )
}

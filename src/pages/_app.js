import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import {useEffect} from 'react';

export default function App() {
  // Bootstrap uses some only client-side objects (window, document) to handle events. On the other hand, Next.js 
  // renders the app on both the server side and the client side. To avoid the mentioned errors, we have to make 
  //sure that the window and document objects only be used on the client side. That can be done with the useEffect hook
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
